import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions";

const SingleProductCard = ({ selectedProduct, addToCart }) => {
  const { title, description, category, rating, image, price } =
    selectedProduct;

  const handleAddToCart = () => {
    addToCart(selectedProduct);
  };
  return (
    <div>
      {Object.keys(selectedProduct).length !== 0 && (
        <div className="single-product-card">
          <div className="product-image">
            <img src={image} alt={title} />
          </div>
          <div className="product-content">
            <div className="product-title">
              <h2>{title}</h2>
            </div>
            <div className="product-description">
              <p>{description}</p>
            </div>
            <div className="product-rating-info">
              <div className="product-like">
                <p>Likes: </p>
                <i class="fas fa-thumbs-up"></i>
                <p>{rating.count}</p>
              </div>
              <div className="product-rating">
                <p>Rating: </p>
                <p>{rating.rate}</p>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div className="product-category">
              <i class="fas fa-tags"></i>
              <span>Category:</span>
              <p>{category}</p>
            </div>
            <div className="product-price">
              <i class="fas fa-rupee-sign"></i>
              <p>{price}</p>
            </div>
            <div className="product-atc-btn">
              <Link to="/" className="link">
                <button onClick={handleAddToCart}>Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const mapStateToProps = (state) => {
    return { selectedProduct: state.selectedProduct };
  };

export default connect(mapStateToProps, { addToCart })(SingleProductCard);
