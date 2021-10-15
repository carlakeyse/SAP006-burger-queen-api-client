import React from 'react';
import './style.css'

const Input = ({ name, type, value, onChange }) => {
  return ( 
    <input
        name={name}
        type={type}
        value={value}
        onChange={onChange} 
    />
  );
};
 
export default Input;