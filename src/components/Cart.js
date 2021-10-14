import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItemFromCart,
  addToCart,
  removeItem,
  checkoutAll,
} from "../actions";
import Empty from "./Empty";

const Cart = ({
  cart,
  removeItemFromCart,
  addToCart,
  removeItem,
  checkoutAll,
}) => {
  return (
    <div className="container">
      {cart.length !== 0 ? (
        <div className="cart-container">
          {cart.map((item) => {
            return (
              <div className="cart-card" key={item.id}>
                <div className="cart-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-card-title">{item.title}</div>
                <div className="cart-card-grid-quantity">
                  <div className="cart-card-quantity">
                    <button
                      className="cart-product-atc"
                      onClick={() => addToCart(item)}
                    >
                      <i class="far fa-plus-square"></i>
                    </button>
                    <div className="cart-product-quantity">
                      <p>{item.quantity}</p>
                    </div>
                    <button
                      className="cart-product-remove"
                      onClick={() => removeItemFromCart(item)}
                    >
                      <i class="far fa-minus-square"></i>
                    </button>
                  </div>
                  <div className="cart-item-price">
                    <p>Total Cost:</p>
                    <p>
                      {item.quantity * item.price}
                      <i class="fas fa-rupee-sign"></i>
                    </p>
                  </div>
                </div>
                <div className="cart-misc">
                  <button
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove Item
                  </button>
                  <Link to={`/userdetail/${item.id}`} className="link">
                    <button
                      className="buy-now"
                      onClick={() => checkoutAll([item])}
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="checkoutall-btn">
            <Link to="/userdetail" className="link">
              <button onClick={() => checkoutAll(cart)}>checkout All</button>
            </Link>
          </div>
        </div>
      ) : (
        <Empty
          label="Cart is empty, No items have been added to cart..!!"
          icon={<i class="fas fa-shopping-cart"></i>}
        />
      )}
    </div>
  );
};

const mapDispatchToProps = {
  removeItemFromCart,
  addToCart,
  removeItem,
  checkoutAll,
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
