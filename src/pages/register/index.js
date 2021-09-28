import React from 'react';
import { Link } from 'react-router-dom';
import '../Register/style.css';

const Register = () => 
    <header>
    <h1>Cadastro</h1>
    <form>
    <input type='name' name='name' placeholder='Nome' />
    <select name='role'>
        <option value='chef'>Chef</option>
        <option value='waiter'>Atendimento</option>
    </select>
    <input type='email' name='email' placeholder='Email' />
    <input type='password' name='password' placeholder='Senha' />
    <button type='submit' onClick={Register}>
        Cadastrar
    </button>
    <Link className='link' to='/login'>Já tem uma conta?</Link>
    </form>
    </header>

export default Register;