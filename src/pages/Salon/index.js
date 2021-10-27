import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import useFormSalon from "./useFormSalon";
import { postOrder } from "../../Services/postOrder";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import CartItem from "../../components/CartItem";
import Products from "../../components/Products";

import "./style.css";
//import { validationSalon } from "./validationSalon";

/*const Salon = () => {
  const {
    client,
    order,
    setMenu,
    setTable,
    selectProducts,
    addItem,
    removeItem,
    onSubmit,
    total,
    onChangeClient,
  } = useFormSalon();*/
  function Salon() {
    const token = localStorage.getItem('token');
  
    const [client, setClient] = useState('');
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState('breakfast');
    const [order, setOrder] = useState([]);
    const [table, setTable] = useState('');
   
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
        accumulator = Number (qtd * price + accumulator)
        return accumulator
      }, 0)
      return finalPrice;
    }
    const total = amount(order)
  
      const handleSubmit = (event) => {
        event.preventDefault(); 
        
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
        }
  

  const history = useHistory();
    const ReadyOrder = () => {
        history.push('/pedidos')
    }

    const serverOrder = () => {
        history.push('/servir')
    }
  return (
    <>
      <div>
        <section className="salon-main">
          <section className="container-menu">
           <section className="container-menu">
            <div className="info-table-client">
              <select
                className="select-table"
                name="Mesa: "
                onChange={(event) => setTable(event.target.value)}
              >
                <option value="mesa01">Mesa</option>
                <option value="mesa01">01</option>
                <option value="mesa02">02</option>
                <option value="mesa03">03</option>
                <option value="mesa04">04</option>
                <option value="mesa05">05</option>
              </select>

              <Input
                className="input-client"
                placeholder="Cliente"
                name="client"
                value={client}
                onChange={onChangeClient}
              />
            </div>
            <Button
              onClick={() => {
                setMenu("breakfast");
              }}
            >
              <p className="name-button">Café da Manhã</p>
            </Button>
            <Button
              onClick={() => {
                setMenu("all-day");
              }}
            >
              <p className="name-button">Menu Principal</p>
            </Button>
          </section>

          {selectProducts &&
            selectProducts.map((item) => (
              <div key={item.id}>
                <Products
                  divClassName="box-products"
                  productsName={item.name}
                  ImgSrc={item.image}
                  productsFlavor={item.flavor}
                  productsComplement={item.complement}
                  productsPrice={item.price}
                  addOnClick={(event) => addItem(event, item)}
                />
              </div>
            ))}
        </section>

        <section className="orders-area">
          <section className="button-orders-conatiner">
            <Button text="servir" className="button-orders" onClick={serverOrder}>
              <p className="name-button"> Servir </p>
            </Button>
            <Button
              text="pedidos"
              className="button-orders"
              onClick={ReadyOrder}
            >
              <p className="name-button"> Prontos </p>
            </Button>
          </section>

            <div className="box-order-itens">
              {order.map((item, index) => (
                <div key={item.id}>
                  <CartItem
                    divClassName="order-itens"
                    productsName={item.name}
                    productsPrice={item.price}
                    productsFlavor={item.flavor}
                    products={item.qtd}
                    qtd={item.qtd}
                    productsComplement={item.complement}
                    removeOnClick={(event) => removeItem(event, item, index)}
                  />
                </div>
              ))}

             
              <div className="total-sum">
                <h1>Total R$ {total},00</h1>
              </div>
             
              <Button
                text="enviar para a cozinha"
                onClick={handleSubmit}>
                Enviar
              </Button>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Salon;