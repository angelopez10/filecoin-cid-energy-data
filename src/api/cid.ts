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
		return data;
	}
}
