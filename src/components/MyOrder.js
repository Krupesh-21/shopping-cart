import React, { Component } from "react";
import { connect } from "react-redux";
import Empty from "./Empty";
import { Link } from "react-router-dom";

class MyOrder extends Component {
  render() {
    const { myOrder } = this.props;
    console.log(myOrder);
    return (
      <div className="container">
        <h2 className="my-order-page-title">My Orders</h2>
        {myOrder.length !== 0 ? (
          <div className="my-order-container">
            {myOrder.map((order) => {
              return (
                <div className="my-order-card" key={order.orderId}>
                  <div className="my-order-card-header">
                    <div className="order-date">
                      <p>Order Placed</p>
                      <p>{order.orderDate}</p>
                    </div>
                    <div className="order-username">
                      <p>Ship To</p>
                      <p>{order.name}</p>
                    </div>
                    <div className="order-id">
                      <p>Order ID</p>
                      <p>{`#${order.orderId.slice(0, 13)}`}</p>
                    </div>
                    <div className="total-item">
                      <p>Total Item</p>
                      <p>{order.myOrder.length}</p>
                    </div>
                    <div className="total-cost">
                      <p>Total Cost</p>
                      <p>{`₹ ${order.totalCost}`}</p>
                    </div>
                  </div>
                  <div className="my-order-card-content-container">
                    {order.myOrder.map((item) => {
                      return (
                        <div className="my-order-card-content" key={item.id}>
                          <div className="my-order-card-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="my-order-card-title-category">
                            <div className="my-order-card-title">
                              <p>{item.title}</p>
                            </div>
                            <div className="my-order-card-category">
                              <p>{item.category}</p>
                            </div>
                          </div>
                          <div className="my-order-card-total-cost">
                            <p>{`Item Quantity: ₹ ${item.quantity}`}</p>
                            <p>{`Item Price: ₹ ${item.price}`}</p>
                            
                            <p>{`Item Total Cost: ₹ ${
                              item.quantity * item.price
                            }`}</p>
                          </div>
                          <div className="my-order-card-rating-like">
                            <div className="my-order-card-rating">
                              <p>
                                {`Rating: ${item.rating.rate}`}{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                            <div className="my-order-card-like">
                              <p>
                                {`Like: ${item.rating.count}`}{" "}
                                <i class="fas fa-thumbs-up"></i>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="my-order-btn-link">
                    <Link to="/" className="link">
                      <button className="continue-shopping">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Empty
            label="No items have been placed as your order!!"
            icon={<i class="fas fa-shopping-bag"></i>}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { myOrder: state.myOrder };
};
export default connect(mapStateToProps)(MyOrder);

