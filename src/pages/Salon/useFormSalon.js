import { useState } from "react";
import { useHistory } from "react-router-dom";
import validationSalon from "./validationSalon";

const useFormSalon = () => {
  const history = useHistory();

  function navigateMainMenu() {
    history.push('/menu-principal', values)
  }

  function navigateBreakMenu() {
    history.push('/menu-matinal', values)
  }

  const [errors, setErrors] = useState({
    empty : true
  })
  
  const [values, setValues] = useState({
    table: '',
    clientInputName: '',
    name: '',
  })

  const onSubmit = event => {
    event.preventDefault();
    const validation = validationSalon(values); 
  }
   
   return {  }
}


export default useFormSalon;