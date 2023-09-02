import axios from 'axios'
import md5 from "md5";

const marvelPrivateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY || ""
const apikey = import.meta.env.VITE_MARVEL_API_KEY || ""
const ts = Number(new Date());

const hash = md5(ts + marvelPrivateKey + apikey);

export const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public",
    params: {
      ts,
      apikey,
      hash,
    },
  })


api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {response, request, message} = error

    if (response) {
      console.error('Erro de resposta:', response.data);
    } else if (request) {
      console.error('Erro de requisição:', request);
    } else {
      console.error('Erro:', message);
    }
    return Promise.reject(error);
  }
);