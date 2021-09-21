import React from "react";
import { connect } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button, Typography } from "@material-ui/core";

const AddToCartButton = ({ cart }) => {
  return (
    <div>
      <div className="cart-button">
        <div className="cart-length">
          <Typography variant="subtitle1" className="cart-length-div">
            {cart.length}
          </Typography>
        </div>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ShoppingCartIcon />}
        >
          Cart
        </Button>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(AddToCartButton);
