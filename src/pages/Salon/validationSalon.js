export const validationSalon = (order, client, table) => {
  let error = {};
  error.notNull = true;
  if (order.length === 0) {
    error.order = 'Insira itens na comanda';
    error.notNull = false;
  }
  if (!client) {
    error.client = 'Informe o nome do cliente';
    error.notNull = false;
  }
  if (!table || table >= 5) {
    error.table = 'Escolha uma mesa';
    error.notNull = false;
  }
  return error;
}

export default validationSalon;