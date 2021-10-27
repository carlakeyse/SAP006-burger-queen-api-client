import React from "react";
import "./style.css";

const Input = ({label, type, name, value, onChange, className, placeholder }) => {
  return (
      <div className='input-container'> 
          <label htmlFor={name} className='label'>
              {label}
          </label>
          <input 
          id={name} 
          name={name} 
          className={className?className:"input"}
          placeholder={placeholder}
          type={type} 
          value={value} 
          onChange={onChange}
          />
      </div>
  );
}


export default Input;



/*const Input = ({ variant, name, type, value, label, onChange }) => {
  const classes = `input ${variant}`;
  return (
    <label>
      <input
        className={classes}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
      {label}
    </label>
  );
};*/