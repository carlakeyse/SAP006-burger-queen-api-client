import React, { useState, useContext } from 'react';
import { LoggedUser } from '../../Services/auth';
import { useHistory } from 'react-router-dom';
import StoreContext from '../Store/Context';
import { Link } from 'react-router-dom';
import './style.css';

function initialState() {
  return { user: '', password: '' };
}

function Login({ user, password }) {
  if (user ==='admin' && password === "admin") {
    return { token: '123456'};
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
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
    console.log(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const { token, error } = Login(values);
   if (token) {
     setToken(token);
     return history.push('/');
   }

   setError(error);
   setValues(initialState);

  }

  return (
    <div className="user-login">
      <h1>Entrar</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login-form-control">
          <label htmlFor="user">Email</label>
          <input
              id='user'
              type='email'
              name='user'
              onChange={onChange}
              value={values.user}
            />
        </div>
        <div className="user-login-form-control">
          <label htmlFor="password">Senha</label>
          <input
              id='password'
              type='password'
              name='password'
              onChange={onChange}
              value={values.password}
            />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <br/>
        <button type='submit' onClick={onSubmit}>
          Entrar
        </button>
        <br/>
        <div>
          <Link className='link' to='/register'>Cadastrar</Link>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;




/* function Login() {
  return (
    <div className="user-login">
     <h1 className="user-login__title">Entrar</h1>
     <form>
       <div className="user-login__form-control">
       <label htmlFor="user">Usuário</label>
       <input type='email' name='email' placeholder='Email' />
       </div>
       <div className="user-login__form-control">
       <label htmlFor="password">Senha</label>
       <input type='password' name='password' placeholder='Senha' />
       </div>
       <button type='submit' onClick={Login}>
         Entrar
       </button>
       <div>
       <Link className='link' to='/register'>Cadastrar</Link>
       </div>
     </form>
     </div>
  );
} */