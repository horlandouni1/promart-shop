import React, { useContext } from "react";
import { Pagar } from "../components/Pagar";
import "../styles/Checkout.scss";
import AppContext from "../context/AppContext";
const Checkout = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0).toFixed(2);
    return sum;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>

        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>Total de productos: {state.cart.length}</span>
              <span>Total a pagar: ${sumTotal()}</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
        </div>
      </div>
      <Pagar />
    </div>
  );
};

export default Checkout;
