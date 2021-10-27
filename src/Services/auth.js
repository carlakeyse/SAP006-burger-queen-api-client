const STORAGE_KEY = 'token';
export const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

export const isUserActive = localStorage[STORAGE_KEY]; 
export const loginConfirmed = (token) => { 
    localStorage.setItem(STORAGE_KEY, token)
};

export const CreateUser = async (name, email, password, role) => {
console.log(CreateUser);
  return await fetch('https://lab-api-bq.herokuapp.com/users', {
    method: "POST",
    headers: { 
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Stellar Burger",
    }),
  }).then((res) => res.json())
};

//stringfy para enviar info
//parse para pegar info

export const LoggedUser = async (email, password) => { 
  console.log(email, password);
    return await fetch('https://lab-api-bq.herokuapp.com/auth' , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
    }),
 }).then(res => res.json());
};

