import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import "../styles/MyOrder.scss";
import flechita from "@icons/flechita.svg";
const MyOrder = ({ setToggleOrders }) => {
  const { state } = useContext(AppContext);
  let navigate = useNavigate();
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0).toFixed(2);
    return sum;
  };
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img
          src={flechita}
          alt="arrow"
          onClick={() => setToggleOrders(false)}
        />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button
          className="primary-button"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default MyOrder;
