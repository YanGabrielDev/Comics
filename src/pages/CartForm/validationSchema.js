import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    zip_code: Yup.string().required('Campo obrigatório'),
    street: Yup.string().required('Campo obrigatório'),
    number: Yup.string().required('Campo obrigatório'),
    complement: Yup.string(),
    city: Yup.string().required('Campo obrigatória'),
    state: Yup.string().required('Campo obrigatório'),
    neighbourhood: Yup.string().required('Campo obrigatório'),
  });