import axios from 'axios';

const API_PREFIX = process.env.API_PREFIX;

const config = {
  withCredentials: true,
};

const request = async (url, method, body = {}) => {
  try {
    const API_ENDPOINT = API_PREFIX + url;
    const { data } =
      (method === 'get' && (await axios.get(API_ENDPOINT, config))) ||
      (method === 'post' && (await axios.post(API_ENDPOINT, body, config))) ||
      (method === 'put' && (await axios.put(API_ENDPOINT, body, config))) ||
      (method === 'delete' && (await axios.delete(API_ENDPOINT, config)));

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

// API for React Query
export const GET = (url) => axios.get(`${API_PREFIX}${url}`, config);
export const POST = (url, body) => axios.post(`${API_PREFIX}${url}`, body, config);
export const PUT = (url, body) => axios.put(`${API_PREFIX}${url}`, body, config);
export const DELETE = (url) => axios.delete(`${API_PREFIX}${url}`, config);
