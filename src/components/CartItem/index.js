import React from "react";
import Button from "../Button/Button";
import "./style.css";

function CartItem({
  qtd,
  removeOnClick,
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  productsName,
  productsPrice,
  productsNameKey,
  productsPriceKey,
  productsFlavor,
  productsComplement,
}) {
  return (
    <>
      <div
        className={divClassName}
        key={divKey}
        name={divName}
        id={divId}
        price={divPrice}
        qtd={qtd}
      >
        <div className="item-description">
          <h1 className="divName" key={productsNameKey}>
            {productsName}
          </h1>
          <h1 className="item-complement">
           {productsFlavor} {productsComplement}
          </h1>
        </div>
        <div className="item-price">
          <h1 className="divPrice" key={productsPriceKey}>
           {divId} R${productsPrice},00
          </h1>
        </div>
        <div className="box-flavor"></div>
        <h1>{qtd}</h1>

        <Button onClick={removeOnClick} 
        className="remove-button"
         > - </Button>
      </div>
    </>
  );
}
export default CartItem;
