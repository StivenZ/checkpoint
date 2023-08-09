import axios from 'axios';
import { BASE_URL } from '../constants';

/*
 * Axios instance for request
 */
export const base = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

base.interceptors.response.use(
  function (response) {
    if (response.status === 204) {
      return { ...response, data: 'Successful update' };
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
