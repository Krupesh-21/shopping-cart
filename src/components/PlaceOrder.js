import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToMyOrder,
  removeItem,
  emptyCart,
  emptyCheckoutAll,
} from "../actions";

class PlaceOrder extends Component {
  handlePlaceOrder = (checkoutAll, totalCost, userDetail) => {
    this.props.addToMyOrder(checkoutAll, totalCost, userDetail);
    if (checkoutAll.length === 1) {
      this.props.removeItem(checkoutAll[0].id);
    }
    this.props.history.push("/");
    if (checkoutAll.length > 1) {
      this.props.emptyCart();
    }
    this.props.emptyCheckoutAll();
  };
  render() {
    const { product, userDetail, checkoutAll } = this.props;
    console.log("checkoutAll", checkoutAll);
    const totalCostArray = checkoutAll.map(
      (item) => item.price * item.quantity
    );
    const totalCost = totalCostArray.reduce((sum, current) => sum + current, 0);
    console.log("placeOrde Product", product);
    return (
      <div className="container">
        <fieldset>
          <legend>Place Order</legend>
          <div className="place-order-container">
            <div className="place-order-item-card-container">
              {checkoutAll.map((item) => {
                return (
                  <div className="place-order-item-card" key={item.id}>
                    <div className="place-order-item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="place-order-item-card-content">
                      <div className="place-order-item-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="place-order-item-rating-likes">
                        <div className="place-order-item-rating">
                          <p>Rating:</p>
                          <p>{item.rating.rate}</p>
                          <i class="fas fa-star"></i>
                        </div>
                        <div className="place-order-item-likes">
                          <p>Likes</p>
                          <p>{item.rating.count}</p>
                          <i class="fas fa-thumbs-up"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="place-order-userinfo-cost-card-container">
              <div className="place-order-userinfo-card">
                <h3 className="place-order-userdetail-title">User Details</h3>
                <div className="place-order-userdetails-container">
                  <p className="place-order-userdetail-field">User Name</p>
                  <p className="place-order-userdetail-data">
                    {userDetail.name}
                  </p>
                  <p className="place-order-userdetail-field">User Email</p>
                  <p className="place-order-userdetail-data">
                    {userDetail.email}
                  </p>
                  <p className="place-order-userdetail-field">User Phone No.</p>
                  <p className="place-order-userdetail-data">
                    {userDetail.number}
                  </p>
                  <p className="place-order-userdetail-field">User Address</p>
                  <p className="place-order-userdetail-data">
                    {userDetail.address}
                  </p>
                  <p className="place-order-userdetail-field">State</p>
                  <p className="place-order-userdetail-data">
                    {userDetail.state}
                  </p>
                  <p className="place-order-userdetail-field">City</p>
                  <p className="place-order-userdetail-data">
                    {userDetail.city}
                  </p>
                  <p className="place-order-userdetail-field">Pincode</p>
                  <p className="place-order-userdetail-data">
                    {userDetail.pCode}
                  </p>
                </div>
              </div>
              <div className="place-order-items-cost-card">
                <div className="order-summery-title">
                  <h3>Order Summery</h3>
                </div>
                <div className="order-name-cost">
                  <div className="item-name-price-mult-quantity">
                    <h4 className="item-name">Product Name</h4>
                    <h4 className="item-price">Product Price</h4>
                    <div></div>
                    <h4 className="item-quantity">Quantity</h4>
                  </div>
                  <hr />
                  {checkoutAll.map((item) => {
                    return (
                      <div className="product-name-cost-quantity" key={item.id}>
                        <p className="product-name">{item.title}</p>
                        <p className="product-price">{item.price}</p>
                        <i class="fas fa-times"></i>
                        <p className="product-quantity">{item.quantity}</p>
                      </div>
                    );
                  })}
                  <hr />
                  <div className="total-cost-container">
                    <p>Total Cost:</p>
                    <p className="total-cost">{`₹ ${totalCost}`}</p>
                  </div>
                </div>
              </div>
              <div className="place-order-btn">
                <button
                  onClick={() =>
                    this.handlePlaceOrder(checkoutAll, totalCost, userDetail)
                  }
                >
                  Place Order <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.buyProduct,
    userDetail: state.userDetail,
    checkoutAll: state.checkoutAll,
  };
};

const mapDispatchToProps = {
  addToMyOrder,
  removeItem,
  emptyCart,
  emptyCheckoutAll,
};

export default connect(mapStateToProps,mapDispatchToProps)(PlaceOrder);
