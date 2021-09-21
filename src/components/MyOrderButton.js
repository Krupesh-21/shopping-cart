import React from "react";
import { Button, Typography } from "@material-ui/core";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { connect } from "react-redux";

const MyOrderButton = ({myOrder}) => {
  return (
    <div className="my-order-button">
        <div className="my-order-length">
            <Typography variant="subtitle1" className="length-div">
            {myOrder.length}
            </Typography>
        </div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        endIcon={<LocalMallIcon/>}
      >
        My Orders
      </Button>
    </div>
  );
};
const mapStateToProps = (state)=>{
    return{myOrder: state.myOrder}
}
export default connect(mapStateToProps)(MyOrderButton);
