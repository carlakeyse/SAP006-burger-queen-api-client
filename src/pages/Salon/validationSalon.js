export default function validationSalon(values) {
  let errors = { empty : true }

  if(!values.table) {
    errors.table = "Selecione uma mesa para o atendimento"
    errors.empty = false
}

if(!values.clientInputName) {
    errors.clientInputName = "Digite o nome do cliente"
    errors.empty = false
} else if (values.nameClientInput.length < 3) {
    errors.clientInputName = "Insira no mínimo 3 caracteres"
    errors.empty = false
}

return errors;
}

