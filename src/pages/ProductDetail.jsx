import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import React from "react";
import axios from "axios";
import "../styles/ProductDetail.scss";
const ProductDetail = () => {
  const { addToCart } = useContext(AppContext);
  let { idProducto } = useParams();
  let navigate = useNavigate();
  const [product, setProduct] = useState({});
  const getProductId = async (id) => {
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProductId(idProducto);
  }, []);
  return (
    <div className="product-detail-container">
      <div className="detail-image">
        <img src={product.image} alt="" />
      </div>
      <div className="detail-information">
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>Price : ${product.price}</p>
        <p>Category: {product.category}</p>
        <div>
          <span onClick={() => addToCart(product)}>Agregar al carrito</span>
          <span onClick={() => navigate("/")}>Volver al inicio</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
