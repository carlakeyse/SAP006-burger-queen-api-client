import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

function Home() {
    return(
    <><h1>Home</h1><p>
            <Link to='/login'>Acesse agora sua conta</Link>
        </p></>
    );
 }

export default Home;