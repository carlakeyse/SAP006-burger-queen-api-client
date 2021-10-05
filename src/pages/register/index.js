import React, { useState, useContext } from "react";
import { CreateUser } from "../../Services/auth";
import { Link, useHistory } from 'react-router-dom';
import StoreContext from '../Store/Context';
import "./style.css";

function initialState() {
  return { name: '', password: '', role: '', email: '' };
}

function Register({ name, password, email, role }) {
  if (name ==='admin' && password === "admin" && email === 'admin' && role === 'admin') {
    return { token: '123456'};
  }
  return { error: 'Preencha todos os campos' };
}

  const UserRegister = () => {
  // values é um state (o values é o primeiro argumento)
  // setValues atualiza o state "values" (o setValues é o segundo argumento)

    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();
  
    function onChange(event) {
      const { value, name } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
  
    function onSubmit(event) {
      event.preventDefault();
      const { token, error } = Register(values);
     if (token) {
       setToken(token);
       return history.push('/');
     }
  
     setError(error);
     setValues(initialState);
  
}

      CreateUser(values.name, values.email, values.password, values.role)
      .then((response) => {
        if (response.code === 400) {
          
        } else if (response.code === 403) {
          alert("E-mail em uso")
        } else {
          console.log(response.token);

          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.id);

          alert("Cadastro realizado com sucesso. Efetue o Login")
          Register();
        }
      })
      .catch((errors) => {
        console.log(errors)
      });   
  return (
    <header>
      <h1>Cadastro</h1>
      <form onSubmit={onSubmit}>

        <div className="user-register-form-control">
          <label htmlFor="name">Nome Completo</label>
          <input
              type="text"
              name="name"
              onChange={onChange} 
              value={values.name}
          />
        </div>

        <div className="user-register-form-control">
          <label htmlFor="role">Escolha sua função</label>
          <br />
          <label htmlFor="salon">Salão</label>
            <input
                type="radio"
                name="role"
                text="Salão"
                onChange={onChange}
                value={values.role}
            />
          <label htmlFor="salon">Cozinha</label>
            <input
                type="radio"
                name="role"
                text="Cozinha" 
                onChange={onChange}
                value={values.role}
            />
        </div>

        <div className="user-register-form-control">
          <label htmlFor="email">Email</label>
          <input
              type="email"
              name="email"
              onChange={onChange}
              value={values.email} />
        </div>

        <div className="user-register-form-control">
          <label htmlFor="passord">Senha</label>
          <input
               type="password"
               name="password"
               onChange={onChange}
               value={values.password} />
        </div>
        <br />
        <button type="submit" onClick={onSubmit}>
          Cadastrar
        </button>
        <div>
          <br />
          <Link className="link" to="/login">
            Já tenho uma conta
          </Link>
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
      </form>
    </header>
  );
}

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