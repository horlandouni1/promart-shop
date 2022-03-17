import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Menu.scss";
import AppContext from "../context/AppContext";
const Menu = () => {
  const { state, saveState } = useContext(AppContext);
  let navigate = useNavigate();
  const onClick1 = () => {
    const newState = {
      ...state,
      email: "",
      password: "",
      auth: false,
    };
    saveState(newState);
  };
  return (
    <div className="Menu">
      <ul>
        <li>
          <span className="title" onClick={() => navigate("/orders")}>
            My orders
          </span>
        </li>
        <li>
          <span>My account</span>
        </li>
        <li>
          <span onClick={() => onClick1()}>Sign out</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
