import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  addedToCartSelectedCategoryProduct,
  removeSelectedCategory,
  fetchProduct,
} from "../actions";
import Loader from "./reusable components/Loader";
import Card from "./reusable components/Card";

const Category = ({
  selectedCategoryProduct,
  fetchProduct,
  addToCart,
  cart,
  addedToCartSelectedCategoryProduct,
  removeSelectedCategory,
}) => {
  useEffect(() => {
    return () => {
      removeSelectedCategory();
    };
  }, [removeSelectedCategory]);
  console.log(selectedCategoryProduct);
  const renderSelectedCategoryProducts = () => {
    return (
      <div className="grid">
        {selectedCategoryProduct.map((product) => {
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
      {selectedCategoryProduct.length !== 0 ? (
        renderSelectedCategoryProducts()
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
  addedToCartSelectedCategoryProduct,
  removeSelectedCategory,
  fetchProduct,
};

const mapStateToProps = (state) => {
  return { selectedCategoryProduct: state.selectedCategoryProducts };
};

export default connect(mapStateToProps,mapDispatchToProps)(Category);
