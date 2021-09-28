import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
  return (
    <header>
     <h1>Entrar</h1>
     <form>
       <input type='email' name='email' placeholder='Email' />
       <input type='password' name='password' placeholder='Senha' />
       <button type='submit' onClick={Login}>
         Entrar
       </button>
       <div>
       <Link className='link' to='/register'>Cadastrar</Link>
       </div> 
     </form>
     </header> 
  );
}
    
export default Login;

/* function Login() {
  return (
    <div>
      <h1>
          Login
          
      </h1>
    </div>
  );
} */