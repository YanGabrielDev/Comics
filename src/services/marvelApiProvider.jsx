import { api } from "./api";
import { MARVEL_ENDPOINTS, BASE_URL_MARVEL_API } from "./restApiConstants";

import md5 from "md5";

const marvelPrivateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY || "";
const apikey = import.meta.env.VITE_MARVEL_API_KEY || "";
const ts = Number(new Date());

const hash = md5(ts + marvelPrivateKey + apikey);

export const marvelApiProvider = {
  /**
   * Realiza a chamada para o endpoit comics
   */
  getComics: async (offset) => {
    try {
      const response = await api.get(
        `${BASE_URL_MARVEL_API}${MARVEL_ENDPOINTS.COMICS}`,
        {
          params: {
            ts: ts,
            apikey: apikey,
            hash: hash,
            format: "comic",
            formatType: "comic",
            noVariants: true,
            limit: 40,
            offset: offset,
          },
        }
      );
      const { results } = response.data.data;
      return results;
    } catch (error) {
      console.error("Erro ao buscar as HQs:", error);
    }
  },

  /**
   * Realiza a chamada para o endpoit comics com o id da hq selecionada
   * para trazer os detalhes dela
   */
  getDetailsComics: async (id) => {
    try {
      const { data } = await api.get(
        `${BASE_URL_MARVEL_API}${MARVEL_ENDPOINTS.COMICS}/${id}`,
        {
          params: {
            ts: ts,
            apikey: apikey,
            hash: hash,
          },
        }
      );
      const { results } = data.data;

      return results;
    } catch (error) {
      console.error("Erro ao buscar os detalhes da HQ:", error);
    }
  },
};
