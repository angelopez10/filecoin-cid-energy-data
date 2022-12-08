import axios from 'axios';

export class CidAPI {
	public static async get(cid: string) {
		const { data } = await axios.get(`https://cid.contact/cid/${cid}`, {
			headers: {
				'Accept-Language': 'en-US,en;q=0.5',
				'Accept-Encoding': 'gzip, deflate, br',
				Origin: 'https://cid.place',
				Connection: 'keep-alive',
				Referer: 'https://cid.place/',
			},
		});
    const miners = data?.MultihashResults[0]?.ProviderResults.map(({Provider}:any)=>({peerId:Provider.ID,addresses:Provider.Addrs}))
    console.log({miners})
    // get miner id by peer id https://green.filecoin.space/minerid-peerid/api/v1/miner-id?peer_id=QmQzqxhK82kAmKvARFZSkUVS6fo9sySaiogAnx5EnZ6ZmC
    for(const index in miners ){
      const { data } = await axios.get(`https://green.filecoin.space/minerid-peerid/api/v1/miner-id?peer_id=${miners[index].peerId}`, {
			headers: {
				'Accept-Language': 'en-US,en;q=0.5',
				'Accept-Encoding': 'gzip, deflate, br',
				Connection: 'keep-alive',
			},
		});
    console.log({data})
    }
		return miners;
	}
}
