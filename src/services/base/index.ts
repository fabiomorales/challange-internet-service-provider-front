import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_INTERNET_SERVICE_PROVIDER_BACK,
});
