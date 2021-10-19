export const validationLogin = (values, error) => {

  let errors = {};

  if (error === 400) {
    errors.email = "E-mail e/ou senha inválidos";
    errors.password = "E-mail e/ou senha inválidos";
  }

  if (!values.email) {
    errors.email = "E-mail obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Formato de e-mail inválido";
    errors.empty = false
  }

  if (!values.password) {
    errors.password = "Senha obrigatória";
    errors.empty = false
  } else if (values.password.length < 6) {
    errors.password = "Senha muito curta";
    errors.empty = false
  }
  return errors;
}

export default validationLogin;