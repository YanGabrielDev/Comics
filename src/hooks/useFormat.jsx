export const useFormat = () => {
    
const formatCurrency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

 const formatZipCode = (event, formik, inputName) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
    }{
    formik.setFieldValue(inputName, value)
  }
  };

return { formatCurrency, formatZipCode };
}