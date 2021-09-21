// import { useState } from 'react';
import './style.css';

const Button = ({ variant, children, onClick }) => {
    const classes = `button ${variant}`;
    // const [contador, setContador] = useState(0);
    // const incrementa = () => {
    //    setContador(contador + 1);
    // }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;