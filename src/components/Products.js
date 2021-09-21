import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchProduct,
  addToCart,
  addQuantity,
  addedToCart,
} from "../actions";
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Products = ({
  products,
  fetchProducts,
  fetchProduct,
  addToCart,
  addQuantity,
  addedToCart,
}) => {
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return (
    <div>
      <Container>
        {products.length !== 0 ? (
          <Row xs={4} md={4} className="g-5">
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <Col className="mt-4">
                    <Card
                      style={{
                        height: "400px",
                        width: "300px",
                        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Card.Header
                        style={{ height: "40px", backgroundColor: "#F3F9FB" }}
                      >
                        {product.title.split(" ").slice(0, 3).join(" ")}...
                      </Card.Header>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        thumbnail
                        className="mt-3"
                        style={{
                          height: "150px",
                          width: "150px",
                          margin: "auto",
                        }}
                      />
                      <Card.Body>
                        <Card.Text style={{ fontSize: "0.9rem" }}>
                          {product.description.slice(0, 100)}
                          <Breadcrumb onClick={() => fetchProduct(product.id)}>
                            <BreadcrumbItem>
                              <Link
                                to={`products/${product.id}`}
                                style={{
                                  color: "inherit",
                                  textDecoration: "inherit",
                                }}
                              >
                                ...Read More
                              </Link>
                            </BreadcrumbItem>
                          </Breadcrumb>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          backgroundColor: "#F3F9FB",
                        }}
                      >
                        <div style={{ display: "flex", alignItem: "center" }}>
                          <FaTag />
                          <p
                            style={{ fontSize: ".9rem", marginLeft: ".5rem" }}
                          >{` ₹${product.price}`}</p>
                        </div>
                        <Button
                          variant="success"
                          className="ms-2"
                          style={{
                            padding: ".3rem .5rem",
                            fontSize: ".8rem",
                            marginLeft: "1rem",
                          }}
                          onClick={() => {
                            addToCart(product);
                          }}
                        >
                          Add To Cart
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        ) : (
          <Loader label="Products" />
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products, cart: state.cart };
};
export default connect(mapStateToProps, {
  fetchProducts,
  fetchProduct,
  addToCart,
  addQuantity,
  addedToCart,
})(Products);
