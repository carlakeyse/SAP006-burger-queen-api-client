import { useState } from "react";
import { useHistory } from "react-router";
import { LoggedUser } from "../../Services/auth";
import validationLogin from "./validationLogin";

const useFormRegister = () => {
  localStorage.clear();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();


  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    (setErrors(validationLogin(values)));

    LoggedUser(values.email, values.password).then((response) => {
      if (response.code === 400) {
        
      } else {
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response.id);

        if (response.role === "salon") {
          history.push('/salao')
        }
        else if (response.role === "kitchen") {
          history.push('/cozinha')
        }
      }
    }).catch((error) => {
      console.log(error)
    })
  };

  return { onChange, values, onSubmit, errors };
}

export default useFormRegister;