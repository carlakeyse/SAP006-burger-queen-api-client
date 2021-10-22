import React from "react";
import "./style.css";

const Input = ({ variant, name, type, value, label, onChange }) => {
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
};

export default Input;
