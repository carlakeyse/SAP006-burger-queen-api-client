import { useState, useEffect } from "react";
import { validationRegister } from "./validationRegister";
import { CreateUser } from "../../Services/auth";
import { useHistory } from "react-router";


const useFormRegister = () => {

  localStorage.clear();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  
  useEffect(() => {
    return { errors }
  }, [errors])
  
  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
};

const history = useHistory()
const onLogin = () => history.push('/login')

const onSubmit = (event) => {
  event.preventDefault();
  (setErrors(validationRegister(values)));
 
  CreateUser(values.name, values.email, values.password, values.role)
  .then((response) => {
    if (response.code === 400) {
    
    } else if (response.code === 403) {
      return ("E-mail em uso")
    } else {
      console.log(response.token);

      localStorage.setItem('token', response.token);
      localStorage.setItem('id', response.id);

      alert("Cadastro realizado com sucesso!")
      onLogin();
    }
  })
  .catch((errors) => {
    console.log(errors)
  });
};
return { onChange, onSubmit, onLogin, errors };
}

export default useFormRegister;





/*return setValues(() => {
  const auxValues = { ...values };
  auxValues[event.target.name] = event.target.value;
  setErrors(() => validationRegister(auxValues).message);
  return auxValues;*/