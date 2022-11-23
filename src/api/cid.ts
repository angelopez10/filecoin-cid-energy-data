import axios from "axios";

export class CidAPI {
  public static async get(cid: string) {
    const { data } = await axios.get(
      `https://cors-enable.herokuapp.com/cid.contact/cid/${cid}`,
      {
        headers: {
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      }
    );
    return data;
  }
}
