import axios from 'axios';
export type AggregateType = {
	miners: number,
	totalEnergyConsuption: {
		highBoundKw: number,
		lowBoundKw: number,
		estimateKw: number,
	},
	totalDataStored: number,
	totalEnergyPurchasesByType: { [key: string]: number },
}
const CORS_HEADERS =  {
	'Accept-Language': 'en-US,en;q=0.5',
}
export class CidAPI {
	public static async get(cid: string) {
		// get peer ids from CID API 
		console.log({ cid });
		const { data } = await axios.get(`https://cid.contact/cid/${cid}`, {
			headers:CORS_HEADERS
		});
		const miners = data?.MultihashResults[0]?.ProviderResults.map(
			({ Provider }: any) => ({
				peerId: Provider.ID,
				addresses: Provider.Addrs,
			}),
		);
			// get huge location file 
		const {
			data: { providerLocations },
		} = await axios.get(
			'https://provider-quest.s3.us-west-2.amazonaws.com/dist/geoip-lookups/synthetic-locations-latest.json',
			{
				headers:CORS_HEADERS
			}

		);
		let minersToReturn: any[] = []

		
		for (const index in miners) {
			// get miner id by peer id https://green.filecoin.space/minerid-peerid/api/v1/miner-id?peer_id=QmQzqxhK82kAmKvARFZSkUVS6fo9sySaiogAnx5EnZ6ZmC
			try{
				const { data } = await axios.get(
					`https://green.filecoin.space/minerid-peerid/api/v1/miner-id?peer_id=${miners[index].peerId}`, {
						headers:CORS_HEADERS
					}
				);
				if (data[0]) {
					const minerId: string = data[0].MinerId;
					const geolocation = providerLocations.find(
						({ provider }: any) => provider === minerId,
						);
						
					let minerToAdd = {
					...miners[index],
					minerId,
					...data[0],
					...(geolocation || {}),
					};
	
	
					// energy consumption api by miner 
					try{
						const { data: energyData } = await axios.get(
							`https://api.filgreen.d.interplanetary.one/models/export?code_name=TotalEnergyModelv_1_0_1&miner=${minerId}`,
							{
								headers:CORS_HEADERS
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
							minerToAdd = {
								...minerToAdd,
								energyConsumption: {
									highBoundKw: +highBoundKw.toFixed(2),
									lowBoundKw: +lowBoundKw.toFixed(2),
									estimateKw: +estimateKw.toFixed(2),
								},
							};
						}
					}catch(e){
						console.log('error on energy consumption api ',{e})
					}
					// renewable energy contract purchases API 
					try{
						const {
							data: { contracts },
						} = await axios.get(
							`https://proofs-api.zerolabs.green/api/partners/filecoin/nodes/${minerId
							}/contracts`,
							{
								headers:CORS_HEADERS
							}
						);
						console.log({ contracts });
						if (!!contracts.length) {
							const purchasesByEnergySource = contracts.reduce(
								(
									output: { [x: string]: number },
									current: { [x: string]: any },
								) => {
									let key = current.purchases[0]?.certificate.energySource;
									if (output[key]) {
										output[key] += 1;
									} else if (key) {
										output[key] = 1;
									}
		
									return output;
								},
								{},
							) || {};
		
							minerToAdd = {
								...minerToAdd,
								purchasesByEnergySource,
							};
						}
					}catch(e){
						console.log('error on energy contract purchase api : ',{e})
					}
					// total data stored by miner API 
					try{
						const {
							data: { data: resData },
						} = await axios.get(
							`https://api.filecoin.energy/models/model?end=2022-12-06&filter=month&id=7&miner=${minerId}&start=2020-01-01`,
							{
								headers:CORS_HEADERS
							}
						);
						
						const totalDataStored = resData[0].data.reduce(
							(acc: any, current: { value: any }) => {
								return acc + Number(current.value);
							},
							0,
						);
		
						minerToAdd = {
							...minerToAdd,
							totalDataStored,
						}
		
					}catch(e){
						console.log('error on total data stored : ',{e})
					}
					// finish adding miner to miners array 
					minersToReturn.push(minerToAdd)
				}
			}catch(e){
				console.log('error on apis :',{e})
				throw e 
			}
		}

		let  aggregate: AggregateType = {
			miners: 0,
			totalEnergyConsuption: {
				highBoundKw: 0,
				lowBoundKw: 0,
				estimateKw: 0,
			},
			totalDataStored: 0,
			totalEnergyPurchasesByType: {},
		};

		aggregate = minersToReturn.reduce((acc: AggregateType, current: any, index: number) => {
			acc.miners += 1
			acc.totalEnergyConsuption.highBoundKw += current.energyConsumption?.highBoundKw || 0
			acc.totalEnergyConsuption.lowBoundKw += current.energyConsumption?.lowBoundKw || 0
			acc.totalEnergyConsuption.estimateKw += current.energyConsumption?.estimateKw || 0
			acc.totalDataStored += current.totalDataStored
			
			for (const energyType of Object.keys(current.purchasesByEnergySource || {})) {
				if (!acc.totalEnergyPurchasesByType[energyType]) {
					acc.totalEnergyPurchasesByType[energyType] = current.purchasesByEnergySource[energyType]
				} else {
					acc.totalEnergyPurchasesByType[energyType] += current.purchasesByEnergySource[energyType]
				}
			}
			return acc
		}, aggregate)
		console.log({ aggregate })

		return { miners: minersToReturn, aggregate };
	}
}
