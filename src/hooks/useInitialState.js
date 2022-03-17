import { useState, useEffect } from "react";

const initialState = {
  email: "",
  password: "",
  auth: false,
  cart: [],
};
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const localStorageItem = localStorage.getItem("hola");
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem("hola", JSON.stringify(initialState));
      parsedItem = initialState;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    setState(parsedItem);
  }, []);
  const saveState = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem("hola", stringifiedItem);
    setState(newItem);
  };
  const addToCart = (payload) => {
    const newState = {
      ...state,
      cart: [...state.cart, payload],
    };
    saveState(newState);
  };
  const removeFromCart = (payload) => {
    const newState = {
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    };
    saveState(newState);
  };
  return {
    state,
    filter,
    setFilter,
    addToCart,
    removeFromCart,
    saveState,
  };
};
export default useInitialState;
