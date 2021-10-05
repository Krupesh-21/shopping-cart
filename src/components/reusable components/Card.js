import React from "react";
import { connect } from "react-redux";
import { addToCart, fetchProduct } from "../../actions";
import { Link } from "react-router-dom";

const Card = ({
  productTitle,
  productImage,
  productDescription,
  productPrice,
  title,
  product,
  addToCart,
  fetchProduct,
}) => {
  const handleAddToCart = () => {
    console.log("fired");
    addToCart(product);
  };

  const handleFetchProduct = (e) => {
    fetchProduct(product.id);
    console.log("clicked", product.id);
    e.stopPropagation();
  };
  return (
    <div>
      {product && (
        <div className="card">
          <div title={title} className="card-header">
            {`${productTitle}...`}
          </div>
          <div className="card-image">
            <img src={productImage} alt={productTitle} />
          </div>
          <div className="card-content" onClick={handleFetchProduct}>
            <Link to={`products/${product.id}`} className="link">
              {`${productDescription}...`}
            </Link>
          </div>
          <div className="card-footer">
            <div className="card-price">
              <i class="fas fa-rupee-sign"></i>
              <p>{productPrice}</p>
            </div>
            <button className="card-atc" onClick={handleAddToCart}>
              {/* Add To Cart */}
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(null, { addToCart, fetchProduct })(Card);
