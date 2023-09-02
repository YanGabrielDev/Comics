import { api } from "./api";
import { BASE_URL_ZIPCODE_API } from "./restApiConstants";

export const zipCodeApiProvider = {
  getAddressByZipCode: async (zipcode) => {
    try {
      const response = await api.get(`${BASE_URL_ZIPCODE_API}${zipcode}.json`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar Address:", error);
    }
  },
};
