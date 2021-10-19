import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import useFormRegister from "./useFormRegister";
import validationRegister from "./validationRegister";
import { Link } from 'react-router-dom';

import "./style.css";


  const UserRegister = () => {
    const { onChange, values, onSubmit, onLogin, errors } =
      useFormRegister(validationRegister);

    return (
      <div className="container-register">
       <div className="user-register">
        <header>
          <h1>Cadastro</h1>
          <form onSubmit={onSubmit}>
            <div className="user-register-form-control">
              <label htmlFor="name">Nome Completo</label>
              <Input
                name="name"
                type="text"
                onChange={onChange}
                value={values.name}
              />
              <p className="error-message-register">{errors.name && errors.name}</p>
            </div>

            <div className="user-register-form-control">
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                type="email"
                onChange={onChange}
                value={values.email}
              />
              <p className="error-message-register">{errors.email}</p>
            </div>

            <div className="user-register-form-control">
              <label htmlFor="passord">Senha</label>
              <Input
                name="password"
                type="password"
                onChange={onChange}
                value={values.password}
              />
              <p className="error-message-register"> {errors.password}</p>
            </div>
            <div className="user-register-form-control">
              <label htmlFor="role">Escolha sua função</label>
              <br />
              <label className="label" htmlFor="salon">
                Salão
              </label>
              <Input
                type="radio"
                name="role"
                value="salon"
                onChange={onChange}
              />
              <label className="label" htmlFor="kitchen">
                Cozinha
              </label>
              <Input
                type="radio"
                name="role"
                value="kitchen"
                onChange={onChange}
              />
              <p className="error-message-register">{errors.role}</p>
            </div>
            <br />
            <Button type="submit" onClick={onSubmit}>
              Cadastrar
            </Button>
            <div>
              <br />
              <Link className="link-register" to="/login" onClick={onLogin}>
                Já tenho uma conta
              </Link>
            </div>
          </form>
        </header>
       </div>
      </div>
    );
  };

export default UserRegister;

/* const [nome, setNome] = useState('');
  

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicou no handleClick");
  };

  const onChangeName = (e) => {
    // const target = e.target;
    const { target } = e;
    // console.log(target.value);
    // const name = target.name;
    const { name, value } = target;
    // console.log(name);
    // const value = target.value;
    // console.log(value);
    setNome(value);
  };

  useEffect(() => {
    console.log(nome);
  }, [nome]); */

  /*else {
    console.log(response.token);

    localStorage.setItem('token', response.token);
    localStorage.setItem('id', response.id);

    alert("Cadastro realizado com sucesso. Efetue o Login")
    Register();
  } */

  /*  const { token, error } = Register(values);
     if (token) {
       setToken(token);
       return history.push('/');
     }
  
     setErrors(error);
     setValues(initialState);
  
}*/