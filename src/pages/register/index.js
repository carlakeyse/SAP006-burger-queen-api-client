import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../Register/style.css';
=======
import './style.css';
>>>>>>> 5e6a503f3df85735256e16492342e396a61ea207

function Register() {
    return (
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
<<<<<<< HEAD
    <Link className='link' to='/login'>Já tem uma conta?</Link>
=======
    <div>
    <Link className='link' to='/login'>Já tenho uma conta</Link>
    </div>
>>>>>>> 5e6a503f3df85735256e16492342e396a61ea207
    </form>
    </header>
    );
}
    

export default Register;

