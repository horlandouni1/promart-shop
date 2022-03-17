import React, { useContext } from "react";
import Order from "../components/Order";
import "../styles/Orders.scss";
import AppContext from "../context/AppContext";
const Orders = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          {state.cart.map((product) => (
            <Order product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
