import axios from 'axios';

const API_PREFIX = process.env.API_PREFIX;

export const api = {
  get: async (url) => {
    try {
      const { data } = await axios.get(`${API_PREFIX}${url}`);
      if (!data.success) throw new Error(data.message);
      return {
        isSuccess: true,
        data,
      };
    } catch (e) {
      return {
        isSuccess: false,
        message: e.toString(),
      };
    }
  },

  post: async (url, body) => {
    try {
      const { data } = await axios.post(`${API_PREFIX}${url}`, body);
      if (!data.success) throw new Error(data.message);
      return {
        isSuccess: true,
        data,
      };
    } catch (e) {
      return {
        isSuccess: false,
        message: e.toString(),
      };
    }
  },

  update: async (url, body) => {
    try {
      const { data } = await axios.put(`${API_PREFIX}${url}`, body);
      if (!data.success) throw new Error(data.message);
      return {
        isSuccess: true,
        data,
      };
    } catch (e) {
      return {
        isSuccess: false,
        message: e.toString(),
      };
    }
  },

  delete: async (url) => {
    try {
      const { data } = await axios.delete(`${API_PREFIX}${url}`);
      if (!data.success) throw new Error(data.message);
      return {
        isSuccess: true,
        data,
      };
    } catch (e) {
      return {
        isSuccess: false,
        message: e.toString(),
      };
    }
  },
};
