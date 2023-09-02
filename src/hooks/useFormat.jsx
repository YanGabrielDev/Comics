export const useFormat = () => {
    
const formatCurrency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

return { formatCurrency };
}