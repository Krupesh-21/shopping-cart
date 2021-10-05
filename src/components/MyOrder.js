import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  CardActions,
  CardHeader,
  Button,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Empty from "./Empty";
import { Link } from "react-router-dom";
import SingleProductCard from "./reusable components/SingleProductCard";

class MyOrder extends Component {
  render() {
    const { myOrder } = this.props;
    console.log("myOrder",myOrder);
    return (
      <div>
        <Container>
          <Typography variant="h2" align="center">
            My Orders
          </Typography>

          {myOrder.length !== 0 ? (
            <Grid container spacing={3}>
              {myOrder.map((item) => {
                return (
                  <Grid item xs={12}>
                    <Card>
                      <div className="myorder-card-header">
                        <div className="order-date">
                          <Typography variant="h6">Order PLaced</Typography>
                          <Typography variant="h6">{item.orderDate}</Typography>
                        </div>
                        <div className="order-total-cost">
                          <Typography variant="h6">Total Cost</Typography>
                          <Typography variant="h6">{`₹ ${item.totalCost}`}</Typography>
                        </div>
                        <div className="order-username">
                          <Typography variant="h6">Ship To</Typography>
                          <Typography variant="h6">{item.name}</Typography>
                        </div>
                        <div className="order-id">
                          <Typography variant="h6">Order ID</Typography>
                          <Typography
                            variant="h6"
                          >
                            {`#${item.orderId.slice(0,13)}`}
                          </Typography>
                        </div>
                        <div className="total-item">
                          <Typography variant="h6">Total Item</Typography>
                          <Typography
                            variant="h6"
                          >
                            {item.myOrder.length}
                          </Typography>
                        </div>
                      </div>
                      <CardContent>
                        {item.myOrder.map((order) => {
                          return (
                            <fieldset className="card-fieldset">
                            <div className="orders">
                              <CardMedia
                                image={order.image}
                                title={order.title}
                                style={{ height: "110px", width: "90px" }}
                              />
                              <div className="product-info">
                                <Typography variant="subtitle1">
                                  {order.title}
                                </Typography>
                                <Typography variant="subtitle1">
                                  {order.category}
                                </Typography>
                                <Typography variant="subtitle1">
                                  {`Rating: ${order.rating.rate}`}{" "}
                                  <StarIcon style={{ color: "#FFC069" }} />
                                </Typography>
                              </div>
                            </div>
                            </fieldset>

                          );
                        })}
                      </CardContent>
                      <Link to="/">
                      <button className="continue-shopping">Continue Shopping</button>
                      </Link>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Empty
              label="No items have been placed as your order!!"
              component="myorder"
            />
          )}
        </Container>
        <div>
          <SingleProductCard />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { myOrder: state.myOrder };
};
export default connect(mapStateToProps)(MyOrder);
