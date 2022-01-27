import axios from 'axios';

const API_PREFIX = process.env.API_PREFIX;

const request = async (url, method, body = {}) => {
  try {
    const API_ENDPOINT = API_PREFIX + url;
    const { data } =
      (method === 'get' && (await axios.get(API_ENDPOINT))) ||
      (method === 'post' && (await axios.post(API_ENDPOINT, body))) ||
      (method === 'put' && (await axios.put(API_ENDPOINT, body))) ||
      (method === 'delete' && (await axios.delete(API_ENDPOINT)));

    if (!data.success) throw new Error(data.message);
    return {
      isSuccess: true,
      data,
    };
  } catch (e) {
    return {
      isSuccess: false,
      message: e.message,
    };
  }
};
export const api = {
  get: async (url) => await request(url, 'get'),
  post: async (url, body) => await request(url, 'post', body),
  update: async (url, body) => await request(url, 'put', body),
  delete: async (url) => await request(url, 'delete', body),
};
