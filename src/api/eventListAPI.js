import axios from "axios";

const SERVER_ADDR = process.env.REACT_APP_SERVER_ADDR;

// 전체 리스트 추출
export const getEventLists = async () => {
  try {
    const response = await axios.get(`${SERVER_ADDR}/list`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.error(err);
  }
};

// 특정 리스트 추출
export const getEventListById = async (id) => {
  const num = Number(id);
  try {
    const response = await axios.get(`${SERVER_ADDR}/list`);
    const result = response.data[num-1];

    if (response.status === 200) {
      return result; 
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
     console.error(error);
   }
};