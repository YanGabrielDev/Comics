import { api } from "./api";
import { BASE_URL_ZIPCODE_API } from "./restApiConstants";
import { toast } from 'react-toastify';


export const zipCodeApiProvider = {
  getAddressByZipCode: async (zipcode) => {
    try {
      const response = await api.get(`${BASE_URL_ZIPCODE_API}${zipcode}.json`);
      if(response.data.status === 404){
        toast.error("CEP não encontrado!")
      }else{

          toast.success("CEP encontrado!")
      }
      return response.data;
    } catch (error) {

      console.error("Erro ao buscar Address:", error);
    }
  },
};
