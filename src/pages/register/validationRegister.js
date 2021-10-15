export const validationRegister = (values) => {

  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Preencha o seu nome completo';
  }
  if (!values.email.includes('@')) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email inválido. Tente novamente';
  }
  if (!values.password === '') {
    errors.password = 'Crie uma senha';
  } else if (values.password.length < 6) {
    errors.password = 'A senha deve conter no mínimo 5 caracteres';
  }
  if (!values.role === '') {
    errors.role = 'Selecione sua função';
  }

  return errors;
}

export default validationRegister;