import React, { Component } from "react";
import {
  Paper,
  Container,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";
import { connect } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import SendIcon from "@material-ui/icons/Send";
import { addToMyOrder, removeItem, emptyCart,emptyCheckoutAll } from "../actions";
import { Clear } from "@material-ui/icons";

class PlaceOrder extends Component {
  render() {
    const { product, userDetail, checkoutAll } = this.props;
    const totalCostArray = checkoutAll.map(
      (item) => item.price * item.quantity
    );
    const totalCost = totalCostArray.reduce((sum, current) => sum + current, 0);
    console.log("placeOrde Product",product);
    return (
      <div>
        <Container>
          <Paper elevation={2} style={{ padding: "15px", marginTop: "5px" }}>
            <Typography variant="h5" color="textPrimary">
              Place Order
            </Typography>
            {checkoutAll.length !== 0 ? (
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  {checkoutAll.map((item) => (
                    <Grid item xs={12}>
                      <Card
                        style={{
                          padding: "15px",
                          marginTop: "5px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <CardMedia
                          image={item.image}
                          title={item.title}
                          style={{ height: "130px", width: "100px" }}
                        />
                        <CardContent style={{ marginTop: "0" }}>
                          <Typography variant="subtitle1">
                            {item.title}
                          </Typography>
                          <hr style={{ color: "black" }} />
                          <Typography variant="h6">
                            {`Rating: ${item.rating.rate}`}{" "}
                            <StarIcon style={{ color: "#FFC069" }} />
                          </Typography>
                          <Typography variant="h6">
                            {`Like: ${item.rating.count}`}{" "}
                            <ThumbUpAltIcon style={{ color: "#2D46B9" }} />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Grid item xs={6}>
                  <Grid Container>
                    <Grid item xs={12}>
                      <Card style={{ padding: "15px", marginTop: "5px" }}>
                        <Typography
                          variant="h5"
                          align="center"
                          style={{
                            color: "#FFE3E3",
                            backgroundColor: "#2C394B",
                            borderRadius: "3px",
                          }}
                        >
                          User Details
                        </Typography>
                        <hr />
                        <CardActionArea>
                          <Grid container>
                            <Grid item xs={6}>
                              <Typography>User Name:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.name}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>User Email:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.email}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>User Phone No:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.number}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>User Address</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.address}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>State</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.state}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>City</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.city}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>Pincode</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.pCode}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card style={{ padding: "15px", marginTop: "5px" }}>
                        <Typography variant="h6" align="center">
                          Order Summery
                        </Typography>
                        <hr />
                        <Grid container style={{ marginTop: "5px" }}>
                          <Grid item xs={6}>
                            <Typography variant="h6">Product Name</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="h6" align="right">
                              Price
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="h6" align="right"></Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography align="right" variant="h6">
                              Quantity
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                        {checkoutAll.map((item) => {
                          return (
                            <div>
                              <Grid container style={{ marginTop: "15px" }}>
                                <Grid item xs={6}>
                                  <Typography>{item.title}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  <Typography align="right">
                                    {`₹ ${item.price}`}
                                  </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  <Typography align="right">
                                    <Clear />
                                  </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  <Typography align="center">
                                    {item.quantity}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </div>
                          );
                        })}
                        <hr />
                        <Grid container>
                          <Grid item xs={6}>
                            <Typography variant="h6">Total Cost:</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="h6"
                              align="right"
                            >{` ₹${totalCost}`}</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="h6">Payment Mode</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="h6" align="right">
                              {userDetail.modeOfPayment}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              style={{ marginLeft: "417px" }}
                              variant="contained"
                              size="small"
                              color="primary"
                              endIcon={<SendIcon />}
                              onClick={() => {
                                this.props.addToMyOrder(
                                  checkoutAll,
                                  totalCost,
                                  userDetail
                                );
                                this.props.removeItem(product.id);
                                this.props.history.push("/");
                                this.props.emptyCart();
                                this.props.emptyCheckoutAll()
                              }}
                            >
                              Place Order
                            </Button>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Card
                    style={{
                      padding: "15px",
                      marginTop: "5px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <CardMedia
                      image={product.image}
                      title={product.title}
                      style={{ height: "130px", width: "100px" }}
                    />
                    <CardContent style={{ marginTop: "0" }}>
                      <Typography variant="subtitle1">
                        {product.title}
                      </Typography>
                      <hr style={{ color: "black" }} />
                      <Typography variant="h6">
                        {`Rating: ${product.rating.rate}`}{" "}
                        <StarIcon style={{ color: "#FFC069" }} />
                      </Typography>
                      <Typography variant="h6">
                        {`Like: ${product.rating.count}`}{" "}
                        <ThumbUpAltIcon style={{ color: "#2D46B9" }} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Grid Container>
                    <Grid item xs={12}>
                      <Card style={{ padding: "15px", marginTop: "5px" }}>
                        <Typography
                          variant="h5"
                          align="center"
                          style={{
                            color: "#FFE3E3",
                            backgroundColor: "#2C394B",
                            borderRadius: "3px",
                          }}
                        >
                          User Details
                        </Typography>
                        <hr />
                        <CardActionArea>
                          <Grid container>
                            <Grid item xs={6}>
                              <Typography>User Name:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.name}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>User Email:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.email}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>User Phone No:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.number}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>User Address</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.address}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>State</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.state}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>City</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.city}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>Pincode</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography align="right">
                                {userDetail.pCode}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card style={{ padding: "15px", marginTop: "5px" }}>
                        <Typography variant="h6" align="right">
                          Order Summery
                        </Typography>
                        <hr />
                        <Typography variant="h5" align="center">
                          Price Details
                        </Typography>
                        <Grid container>
                          <Grid item xs={6}>
                            <Typography>Product Price:</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography align="right">{`₹ ${product.price}`}</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography>Product Quantity:</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography align="right">{`${product.quantity}`}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <hr />
                          </Grid>
                          <Grid item xs={6}>
                            <Typography>Total Cost:</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography align="right">{`₹ ${
                              product.quantity * product.price
                            }`}</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="h6">Payment Mode</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="h6" align="right">
                              {userDetail.modeOfPayment}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              style={{ marginLeft: "417px" }}
                              variant="contained"
                              size="small"
                              color="primary"
                              endIcon={<SendIcon />}
                              onClick={() => {
                                this.props.addToMyOrder(
                                  [product],
                                  product.quantity * product.price,
                                  userDetail
                                );
                                this.props.removeItem(product.id);
                                this.props.history.push("/");
                              }}
                            >
                              Place Order
                            </Button>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}

            <Grid direction="row-reverse" container spacing={3}>
              <Grid item xs={6}></Grid>
            </Grid>
          </Paper>
        </Container>
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

export default connect(mapStateToProps, {
  addToMyOrder,
  removeItem,
  emptyCart,
  emptyCheckoutAll
})(PlaceOrder);
