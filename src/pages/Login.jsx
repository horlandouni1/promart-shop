import React, { useRef, useContext, useState } from "react";
import "../styles/Login.scss";
import AppContext from "../context/AppContext";
import yardSale from "@logos/logo_yard_sale.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const form = useRef(null);
  const { state, saveState } = useContext(AppContext);
  const [start, setStart] = useState(true);
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      useEmail: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data.useEmail);
    if (data.useEmail === "promart@gmail.com" && data.password === "123456") {
      const newState = {
        ...state,
        email: data.useEmail,
        password: data.password,
        auth: true,
      };
      saveState(newState);
      setStart(true);
      navigate("/");
    } else {
      const newState = { ...state, email: "", password: "", auth: false };
      saveState(newState);
      setStart(false);
    }
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={yardSale} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="horlando@gmail.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Log in
          </button>
          {!state.auth && !start && <p>Email or password incorrect</p>}
          <p>Entrar con email: promart@gmail.com y password:123456</p>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
