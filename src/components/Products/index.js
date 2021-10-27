import React from "react";
import Button from "../Button/Button";
import { GrAdd } from "react-icons/gr";
import "./style.css"

function Products({
    qtd,
    addOnClick,
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
    ImgSrc,
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
          <div className="divButton">
            <Button onClick={addOnClick} className="add-button">
              <GrAdd className="icon-add" />
            </Button>
          </div>
          <div className="boxName">
            <h1  key={productsNameKey}>
              {productsName}
            </h1>
          </div>
          <h3 className="divFlavor">
            {" "}
            {productsFlavor} {productsComplement}
          </h3>
          <div>
            <img src={ImgSrc} className="img-food" alt="img-food"></img>
          </div>
          <h1 className="divComplement"> </h1>
          <h1 className="divPrice" key={productsPriceKey}>
            {" "}
            {divId} R${productsPrice},00
          </h1>
          <h1 className="">{qtd}</h1>
        </div>
      </>
    );
}
export default Products;

//