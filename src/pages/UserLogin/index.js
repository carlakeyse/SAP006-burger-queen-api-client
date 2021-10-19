import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useFormLogin from './useFormLogin';
import validationLogin from './validationLogin';
import { Link } from 'react-router-dom';

import './style.css';

const UserLogin = () => {
  const { onChange, values, onSubmit, errors } = useFormLogin(validationLogin);

  return (
    <div className="user-login">
      <h1>Entrar</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login-form-control">
          <label htmlFor="user">Email</label>
          <Input
              name='email'
              type='email'
              value={values.email}
              onChange={onChange}
            />
          <p>{errors.email && errors.email}</p>
        </div>
        <div className="user-login-form-control">
          <label htmlFor="password">Senha</label>
          <Input
              name='password'
              type='password'
              value={values.password}
              onChange={onChange}
            />
        <p>{errors.password && errors.password}</p>
        </div>
       
        <br/>
        <Button type='submit' onClick={onSubmit}>
          Entrar
        </Button>
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