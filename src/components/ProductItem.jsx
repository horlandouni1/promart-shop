import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import addCart from "@icons/bt_add_to_cart.svg";
import addCartAdd from "@icons/bt_added_to_cart.svg";
const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  let navigate = useNavigate();
  return (
    <div className="ProductItem">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
          <p>Category: {product.category}</p>

          <span onClick={() => navigate(`/product-detail/${product.id}`)}>
            Ver más
          </span>
        </div>
        <figure onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <img src={addCartAdd} alt="" />
          ) : (
            <img src={addCart} alt="" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
