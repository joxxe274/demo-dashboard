import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/data';

export const getData = async () => {

  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (e: any) {
    return { error: e.response.data};
  }
}