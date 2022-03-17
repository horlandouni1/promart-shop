import React, { useEffect } from "react";

function useLocalStorage(item_name, initial_value) {
  const [item, setItem] = React.useState(initial_value);
  useEffect(() => {
    const localStorageItem = localStorage.getItem(item_name);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(item_name, JSON.stringify(initial_value));
      parsedItem = initial_value;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    setItem(parsedItem);
  });
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(item_name, stringifiedItem);
    setItem(newItem);
  };
  return {
    item,
    setItem,
    saveItem,
  };
}

export { useLocalStorage };
