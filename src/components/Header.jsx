import React, { useState, useContext } from "react";
import "../styles/Header.scss";
import { useNavigate } from "react-router-dom";
import Menu from "@components/Menu";
import MyOrder from "../containers/MyOrder";
import logoMenu from "@icons/icon_menu.svg";
import logoSale from "@logos/promart_logo.png";
import iconShop from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  let navigate = useNavigate();
  const { state, setFilter } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const onClick = (categoria) => {
    navigate("/");
    setFilter(categoria);
  };
  return (
    <nav>
      <img src={logoMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logoSale} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <span onClick={() => onClick("")}>All</span>
          </li>
          <li>
            <span onClick={() => onClick("electronics")}>Electronics</span>
          </li>
          <li>
            <span onClick={() => onClick("jewelery")}>Jewelery</span>
          </li>
          <li>
            <span onClick={() => onClick("men's clothing")}>men clothing</span>
          </li>
          <li>
            <span onClick={() => onClick("women's clothing")}>
              women clothing
            </span>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            Usuario
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            {state.auth && <img src={iconShop} alt="shopping cart" />}
            {state.auth && state.cart.length > 0 ? (
              <div>{state.cart.length}</div>
            ) : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
    </nav>
  );
};

export default Header;
