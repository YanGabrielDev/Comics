import P from 'prop-types'
import { TextField } from "../../components/TextField";
import { Content } from "../../components/Content";
import { GridThreeFields, GridTwoFields } from "./styles";
import { useFormat } from "../../hooks/useFormat";
import { zipCodeApiProvider } from "../../services/zipCodeApiProvider";
import { useState } from "react";
import { Loader } from "lucide-react";

export const AddressForm = ({formik}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { formatZipCode } = useFormat();

 /**
   * Busca o endereço pelo CEP
   * @param {{}} address 
   */
  const loadAddress = async (zipCode) => {
    try {
      if (zipCode.length > 3) {
        setIsLoading(true);

        const { getAddressByZipCode } = zipCodeApiProvider;
        const address = await getAddressByZipCode(zipCode);
        updateFormValue(address)
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };


  /**
   * Atualiza o formulatio com o endereço encontrado
   * @param {{}} address 
   */
  const updateFormValue = (address) => {
    formik.setFieldValue("street", address.address);
    formik.setFieldValue("neighbourhood", address.district);
    formik.setFieldValue("city", address.city);
    formik.setFieldValue("state", address.city);
  };
  return (
      <Content>
        <GridTwoFields>
          <TextField
            placeholder="CEP"
            name="zip_code"
            value={formik.values.zip_code}
            error={!!formik.errors.zip_code}
            message={formik.errors.zip_code}
            onChange={(event) => formatZipCode(event, formik, "zip_code")}
            onBlur={() => {
              loadAddress(formik.values.zip_code);
            }}
            e
          />
          <div>{isLoading && <Loader />}</div>
        </GridTwoFields>
        <TextField
          placeholder="Rua"
          name="street"
          value={formik.values.street}
          message={formik.errors.street}

          error={!!formik.errors.street}
          onChange={formik.handleChange}
        />
        <GridTwoFields>
          <TextField
            placeholder="Numero"
            name="number"
            value={formik.values.number}
            message={formik.errors.number}
            error={!!formik.errors.number}
            onChange={formik.handleChange}
          />
          <TextField
            placeholder="Complemento"
            name="complement"
            value={formik.values.complement}
            message={formik.errors.complement}
            error={!!formik.errors.complement}
            onChange={formik.handleChange}
          />
        </GridTwoFields>
        <GridThreeFields>
          <TextField
            placeholder="Bairro"
            name="neighbourhood"
            message={formik.errors.neighbourhood}
            value={formik.values.neighbourhood}
            error={!!formik.errors.neighbourhood}
            onChange={formik.handleChange}
          />
          <TextField
            placeholder="Cidade"
            name="city"
            value={formik.values.city}
            message={formik.errors.city}
            error={!!formik.errors.city}
            onChange={formik.handleChange}
          />
          <TextField
            placeholder="Estado"
            name="state"
            value={formik.values.state}
            message={formik.errors.state}
            error={!!formik.errors.state}
            onChange={formik.handleChange}
          />
        </GridThreeFields>
      </Content>
  );
};

AddressForm.propTypes = {
    formik: P.ob,
  };