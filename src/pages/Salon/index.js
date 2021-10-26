import React from "react";
import { useHistory } from "react-router-dom";
import useFormSalon from "./useFormSalon";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import CartItem from "../../components/CartItem";
import Products from "../../components/Products";

import "./style.css";
//import { validationSalon } from "./validationSalon";

const Salon = () => {
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
  } = useFormSalon();
  

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
            selectProducts.map((item, index) => (
              <div key={index}>
                <Products
                  divClassName="box-item"
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
                <div key={index}>
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

              <hr />
              <div className="total-sum">
                <h1>Total R$ {total},00</h1>
              </div>

              <Button
                text="enviar para a cozinha"
                onClick={(event) => onSubmit(event)}>
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