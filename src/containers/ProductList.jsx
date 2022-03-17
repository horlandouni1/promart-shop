import React, { useContext } from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/ProductList.scss";
import AppContext from "../context/AppContext";
const API = "https://fakestoreapi.com/products";
const ProductList = () => {
  const products = useGetProducts(API);
  const { filter } = useContext(AppContext);
  const productFilter = products.filter(
    (product) => product.category === filter
  );
  return (
    <section className="main-container">
      <div className="ProductList">
        {filter === ""
          ? products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          : productFilter.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
      </div>
    </section>
  );
};

export default ProductList;
