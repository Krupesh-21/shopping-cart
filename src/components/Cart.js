import React from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItemFromCart,
  addQuantity,
  addToCart,
  buyThisProduct,
  removeItem,
  checkoutAll,
  emptyCart,
} from "../actions";
import Empty from "./Empty";
import { Button, Grid } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const Cart = ({
  cart,
  removeItemFromCart,
  addToCart,
  buyThisProduct,
  removeItem,
  checkoutAll,
}) => {
  // const handleRemoveItem = (product) => {
  //   if (product.quantity === 1) {
  //   } else {
  //     removeQuantity(product.id);
  //   }
  // };

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
                  <Link  to={`/userdetail/${item.id}`} className="link">
                  <button
                    className="buy-now"
                    onClick={() => buyThisProduct(item)}
                  >
                    Buy Now
                  </button>
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="checkoutall-btn">
            <button>checkout All</button>
          </div>
        </div>
      ) : (
        <Empty
          label="Cart is empty, No items have been added to cart"
          component="cart"
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, {
  removeItemFromCart,
  addQuantity,
  addToCart,
  buyThisProduct,
  removeItem,
  checkoutAll,
})(Cart);

// {cart.length !== 0 ? (
//   <Container className="mt-3">
//     {cart.map((item) => {
//       return (
//         <Row className="g-3 w-1oo" xs={12} md={12}>
//           <Alert
//             variant="warning"
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               backgroundColor: "#FFFFFF",
//               boxShadow:
//                 "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
//             }}
//           >
//             <Col className="col-1">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-start",
//                   backgroundColor: "#FFF5FD",
//                   padding: "5px",
//                   flexWrap: "wrap",
//                   boxShadow:
//                     "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
//                   width: "6rem",
//                 }}
//               >
//                 <h5 style={{ textAlign: "center", color: "#343F56" }}>
//                   Quantity:
//                 </h5>
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontSize: "2rem",
//                     color: "#343F56",
//                   }}
//                 >
//                   {item.quantity}
//                 </p>
//               </div>
//             </Col>
//             <Col className="col-2">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   marginTop: "9px",
//                 }}
//               />
//             </Col>
//             <Col className="col-3">
//               <Alert.Heading
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {item.title}
//               </Alert.Heading>
//             </Col>
//             <Col
//               className="col-6"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <div className="cost">
//                 <h4>Total Cost:</h4>
//                 <p>{` ₹${item.quantity * item.price}`}</p>
//               </div>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 style={{
//                   height: "3rem",
//                   marginTop: "2rem",
//                   marginRight: "1rem",
//                 }}
//                 onClick={() => {
//                   addToCart(item);
//                 }}
//               >
//                 <span style={{ fontSize: "2rem" }}>+</span>
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 style={{
//                   height: "3rem",
//                   marginTop: "2rem",
//                 }}
//                 onClick={() => {
//                   removeItemFromCart(item);
//                 }}
//               >
//                 <span style={{ fontSize: "2rem" }}>-</span>
//               </Button>
//               <Button
//                 variant="contained"
//                 color="error"
//                 startIcon={<Delete />}
//                 style={{
//                   height: "3rem",
//                   marginTop: "2rem",
//                   marginLeft: "2rem",
//                   backgroundColor: "#F8485E",
//                   color: "#F9F9F9",
//                 }}
//                 onClick={() => removeItem(item.id)}
//               >
//                 Remove Item
//               </Button>
//               <Link
//                 to={`/userdetail/${item.id}`}
//                 style={{ color: "inherit", textDecoration: "inherit" }}
//               >
//                 <Button
//                   style={{
//                     height: "3rem",
//                     marginTop: "2rem",
//                     marginLeft: "2rem",
//                     backgroundColor: "#185ADB",
//                     color: "#F9F9F9",
//                   }}
//                   onClick={() => buyThisProduct(item)}
//                 >
//                   Buy Now
//                 </Button>
//               </Link>
//             </Col>
//           </Alert>
//         </Row>
//       );
//     })}
//     <Grid container direction="row">
//       <Grid item xs={12}>
//         <Link
//           to={`/userdetail`}
//           style={{ color: "inherit", textDecoration: "inherit" }}
//         >
//           <Button
//             style={{ marginLeft: "71rem", backgroundColor: "#f5a962" }}
//             variant="contained"
//             onClick={() => checkoutAll(cart)}
//           >
//             Checkout All
//           </Button>
//         </Link>
//       </Grid>
//     </Grid>
//   </Container>
// ) : (
//   <Empty
//     label="Cart is empty, No items have been added to cart"
//     component="cart"
//   />
// )}
