import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/auth';

export const login = async (username: string, password: string) => {

  try {
    const { data } = await axios.post(API_URL, { username, password });
    return data;
  } catch (e: any) {
    return { error: e.response.data};
  }

}

export const validateToken = async (token: string) => {
    try {
      const { data } = await axios.post(API_URL + '/validate', { token });
      return data;
    } catch (e: any) {
      return { error: e.response.data};
    }
  
  }