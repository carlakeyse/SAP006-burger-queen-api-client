export const validationRegister = (values) => {

  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Preencha o seu nome completo';
    errors.empty = false
  }
  if (!values.email.includes('@')) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email inválido. Tente novamente';
    errors.empty = false
  }
  if (!values.password === '') {
    errors.password = 'Crie uma senha';
  } else if (values.password.length < 6) {
    errors.password = 'A senha deve conter no mínimo 5 caracteres';
    errors.empty = false
  }
  if (!values.role === '') {
    errors.role = 'Selecione sua função';
    errors.empty = false
  }

  return errors;
}

export default validationRegister;