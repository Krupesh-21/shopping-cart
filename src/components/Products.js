import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  fetchProducts,
  fetchProduct,
  addToCart,
} from "../actions";
import Loader from "./reusable components/Loader";
import Card from "./reusable components/Card";

const Products = ({
  products,
  fetchProducts,
}) => {
  console.log("products", products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const renderProducts = () => {
    return (
      <div className="grid">
        {products.map((product) => {
          return (
            <Card
              productTitle={product.title.split(" ").slice(0, 2).join(" ")}
              productImage={product.image}
              productDescription={product.description.slice(0, 80)}
              productPrice={product.price}
              title={product.title}
              product={product}
              key={product.id}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      {products.length !== 0 ? renderProducts() : <Loader />}
    </div>
  );
};

const mapDispatchToProps = {
  fetchProducts,
  fetchProduct,
  addToCart,
};

const mapStateToProps = (state) => {
  return { products: state.products, cart: state.cart };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
