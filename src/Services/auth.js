export const CreateUser =  async (nameUser, emailUser, passwordUser, roleUser) => {
    const url = 'https://lab-api-bq.herokuapp.com/users';
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json"  },
        body: JSON.stringify({
            name: nameUser,
            email: emailUser,
            password: passwordUser,
            role: roleUser,
            restaurant: "Stellar Burger",        
    }),
 });
 return response.json();
};

//stringfy para enviar info
//parse para pegar info

export const LoggedUser = async (emailUser, passwordUser) => {
    const url = 'https://lab-api-bq.herokuapp.com/auth';
    const responseLogged = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: emailUser,
            password: passwordUser,
    }),
 });
 return responseLogged;
};