import axios from "axios";

// 특정 리스트 추출
export const getEventListById = async (id) => {
  const num = Number(id);
  try {
    const response = await axios.get(`http://localhost:8088/list`);
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