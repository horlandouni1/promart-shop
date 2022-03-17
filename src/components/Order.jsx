import React, { useContext } from "react";
import "../styles/Orders.scss";
import AppContext from "../context/AppContext";
import iconClose from "@icons/icon_close.png";
const Order = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="Order">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="Order-details">
        <p>{product.title}</p>
        <p>Precio : ${product.price}</p>
        <p>Categoria : ${product.category}</p>
      </div>
      <div className="order-delete">
        <img
          src={iconClose}
          alt="close"
          onClick={() => handleRemove(product)}
        />
      </div>
    </div>
  );
};

export default Order;
