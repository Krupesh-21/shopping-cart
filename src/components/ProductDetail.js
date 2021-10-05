import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "./reusable components/Loader";
import { removeSelectedProduct } from "../actions";
import SingleProductCard from "./reusable components/SingleProductCard";

const ProductDetail = ({ selectedProduct, removeSelectedProduct }) => {
  useEffect(() => {
    return () => {
      removeSelectedProduct();
    };
  }, [removeSelectedProduct]);

  return (
    <div className="container">
      {Object.keys(selectedProduct).length !== 0 ? (
        <SingleProductCard selectedProduct={selectedProduct} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedProduct: state.selectedProduct };
};

export default connect(mapStateToProps, {
  removeSelectedProduct,
})(ProductDetail);
