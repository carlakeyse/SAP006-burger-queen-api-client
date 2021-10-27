import { useState, useEffect } from "react";
import { postOrder } from '../../Services/products';
//import { validationSalon } from "./validationSalon";

function Salon() {
  const token = localStorage.getItem('token');

  const [client, setClient] = useState('');
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState('breakfast');
  const [order, setOrder] = useState([]);
  const [table, setTable] = useState('');
 // const [selectTable, setSelectTable] = useState('');
  /*const [error, setError] = useState({
    client: '',
    table: '',
    order: '',
  });*/

  const onChangeClient = (event) => {
    const client = event.target.value
    setClient(client)
};

  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      headers: {
        Authorization: `${token}`,
        accept: "application/json",
      }
    }).then((response) =>
      response.json()
    ).then((json) => {
      setProducts(json)
    })
  }, [token]);

  const selectProducts = products.filter((prod) => prod.type === menu)
  
  const addItem = (event, item) => {
    event.preventDefault();

    const element = order.find(res => res.id === item.id);

    if (element) {
        element.qtd += 1;
        setOrder([...order])
    } else {
        item.qtd = 1;
        setOrder([...order, item])
  
    }
}

  const removeItem = (event, item, index) => {
    event.preventDefault();

    const element = order.find(res => res.id === item.id);

    if (element.qtd !== 0) {
      element.qtd -= 1;
      setOrder([...order])
    }
    if (element.qtd === 0) {
      const listOrder = order;
      listOrder.splice(index, 1);
      setOrder([...listOrder])
    }
  }

  const amount = (items) => {
    const finalPrice = items.reduce((accumulator, array) => {
      const { qtd, price } = array;
      accumulator = Number(qtd * price + accumulator)
      return accumulator
    }, 0)
    return finalPrice;
  }
  const total = amount(order)

    const onSubmit = (event) => {
      event.preventDefault(); 
      //const validation = validationSalon();
      //setError(validation)
      //if(validation.notNull) {
        const requestOrder = ({
          "client": client,
          "table": table,
          "products":
            order.map((item) => (
              {
                id: Number(item.id),
                qtd: Number(item.qtd),
              }))
        })
        postOrder(requestOrder);
        setOrder([]);
        //setClient([]);
        //setSelectTable('');
    // } else {
      // alert("deu ruim")
      }
      return { client, products, order, menu, setMenu, table, setTable, selectProducts, total,
        addItem, removeItem, onSubmit, amount, onChangeClient };
  }

  export default Salon;


/*const Logout = (event) => {
  event.preventDefault();
  history.push('/login')
  localStorage.clear();
  alert('Você saiu do aplicativo');
}*/

/*const onChange = (event) => {
  setTable(event.target.value)
  setSelectTable(event.target.value)
}*/