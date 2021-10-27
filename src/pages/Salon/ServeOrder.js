import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import "../../index.css";

function ServeOrder() {
  const token = localStorage.getItem("token");
  const [orderStatus, setOrderStatus] = useState([]);
  const url = "https://lab-api-bq.herokuapp.com/orders/";
  const history = useHistory();

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((orders) => {
        console.log(orders)
        const status = orders.filter((itens) => itens.status.includes("ready"));
        setOrderStatus(status);
      });
  },[]);

  const setStatus = (id, newStatus) => {
    const status = { status: newStatus };
    fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
        const order = orderStatus;
        return order;
      });
    });
  };
  const preparationTime = (deliveryTime, criationTime) => {
    const difference = Math.abs(new Date(deliveryTime) - new Date(criationTime));
    return Math.floor(difference / 1000 / 60 );
}

  return (
    <>
      <header name="Pedidos para entregar" />
      <Button 
            className='button-global'
            onClick={() => history.goBack()}> 
            Voltar
        </Button>
      <section>
        {orderStatus.map((order) => {
          return (
            <section className="orders" key={order.id}>
              <div className="">
                <h1> {order.status.replace("ready", "Para servir")} </h1>
                <p>ID: {order.id} </p>
                <p>Cliente: {order.client_name} </p>
                <p>Mesa: {order.table} </p>
                {order.status === "ready" || order.status === "finished" ? (
                  <p>
                    Tempo de preparação:{" "}
                    {preparationTime(order.updatedAt, order.createdAt)} min
                  </p>
                ) : (
                  ""
                )}
                <time>
                  {`${new Date(order.createdAt).toLocaleDateString(
                    "pt-br"
                  )} - ${new Date(order.createdAt).toLocaleTimeString("pt-br", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}h`}
                </time>
                <hr />
                {order.Products.map((items, index) => (
                  <div key={index}>
                    <p>
                      {items.qtd}
                      {items.name}
                    </p>
                    <p>{items.flavor === "null" ? "" : items.flavor}</p>
                    <p>{items.complement === "null" ? "" : items.complement}</p>
                  </div>
                ))}

                <hr className="break-line" />

                <Button
                  text="Servir"
                  className="button-global"
                  onClick={() => setStatus(order.id, "delivered")}
                >
                  servir
                </Button>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}
export default ServeOrder;
