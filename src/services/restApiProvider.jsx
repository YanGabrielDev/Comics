import { api } from "./api";
import { MARVEL_ENDPOINTS } from "./restApiConstants";

export const restApiProvider = {
  /**
   * Realiza a chamada para o endpoit comics
   */
  getComics: async (offset) => {
    try {
      const response = await api.get(MARVEL_ENDPOINTS.COMICS, {
        params: {
          format: "comic",
          formatType: "comic",
          noVariants: true,
          orderBy: "modified",
          offset: offset,
        },
      });
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
      const { data } = await api.get(`${MARVEL_ENDPOINTS.COMICS}/${id}`);
      const { results } = data.data;

      return results;
    } catch (error) {
      console.error("Erro ao buscar os detalhes da HQ:", error);
    }
  },
};
