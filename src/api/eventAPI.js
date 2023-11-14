import axios from "axios";
import eventdb from "../eventdb.json";

export const getEventItem = eventdb.festival;

export const getEventList = async () => {
  try {
    const response = await axios.get('http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api?serviceKey=Z32WTrmtfhK4NTqxZzTHIisyXYTenGMaLXbfa47%2BalHZdh57vUNiyJwUj4lMgwhISHVNXAToqTt3DxilUwwrmw%3D%3D&pageNo=1&numOfRows=100&type=json')

    return response;
  } catch (error) {
    console.error(error);
  }
}