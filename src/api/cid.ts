import axios from "axios";
import { isConstructorDeclaration } from "typescript";

export class CidAPI {
  public static async get(cid: string) {
    const { data } = await axios.get(`https://cid.contact/cid/${cid}`, {
      headers: {
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        Origin: "https://cid.place",
        Connection: "keep-alive",
        Referer: "https://cid.place/",
      },
    });
    const miners = data?.MultihashResults[0]?.ProviderResults.map(
      ({ Provider }: any) => ({
        peerId: Provider.ID,
        addresses: Provider.Addrs,
      })
    );
    // get miner id by peer id https://green.filecoin.space/minerid-peerid/api/v1/miner-id?peer_id=QmQzqxhK82kAmKvARFZSkUVS6fo9sySaiogAnx5EnZ6ZmC
    const {
      data: { providerLocations },
    } = await axios.get(
      "https://provider-quest.s3.us-west-2.amazonaws.com/dist/geoip-lookups/synthetic-locations-latest.json"
    );

    for (const index in miners) {
      const { data } = await axios.get(
        `https://green.filecoin.space/minerid-peerid/api/v1/miner-id?peer_id=${miners[index].peerId}`,
        {
          headers: {
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        }
      );

      if (data[0]) {
        const minerId = data[0].MinerId;
        const geolocation = providerLocations.find(
          ({ provider }: any) => provider === minerId
        );
        miners[index] = {
          ...miners[index],
          minerId,
          ...data[0],
          ...(geolocation || {}),
        };
      }

      const { data: energyData } = await axios.get(
        `https://api.filgreen.d.interplanetary.one/models/export?code_name=TotalEnergyModelv_1_0_1&miner=${miners[index].MinerId}`,
        {
          headers: {
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        }
      );

      const { data: energyDataArray } = energyData;
      if (energyDataArray[0]) {
        let highBoundKw = 0;
        let lowBoundKw = 0;
        let estimateKw = 0;
        for (const item of energyDataArray) {
          highBoundKw += Number(item.total_energy_kW_upper);
          lowBoundKw += Number(item.total_energy_kW_lower);
          estimateKw += Number(item.total_energy_kW_estimate);
        }
        miners[index] = {
          ...miners[index],
          energyConsumption: { highBoundKw, lowBoundKw, estimateKw },
        };
      }

      if (miners[index].MinerId) {
        const {
          data: { contracts },
        } = await axios.get(
          `https://proofs-api.zerolabs.green/api/partners/filecoin/nodes/${miners[index].MinerId}/contracts`,
          {
            headers: {
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              Connection: "keep-alive",
            },
          }
        );
        if (contracts[0]) {
          const purchasesByEnergySource = contracts.reduce(
            (
              output: { [x: string]: number },
              current: { [x: string]: any }
            ) => {
              let key = current.purchases[0]?.certificate.energySource;
              if (output[key]) {
                output[key] += 1;
              } else if (key) {
                output[key] = 1;
              }

              return output;
            },
            {}
          );

          miners[index] = {
            ...miners[index],
            purchasesByEnergySource,
          };
        }

        const {
          data: { data: data },
        } = await axios.get(
          `https://api.filecoin.energy/models/model?end=2022-12-06&filter=month&id=7&miner=${miners[index].MinerId}&start=2020-01-01`,
          {
            headers: {
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              Connection: "keep-alive",
            },
          }
        );

        const totalDataStored = data[0].data.reduce(
          (acc: any, current: { value: any }) => {
            return acc + Number(current.value);
          },
          0
        );
        miners[index] = {
          ...miners[index],
          totalDataStored,
        };
      }
    }
    return miners;
  }
}
