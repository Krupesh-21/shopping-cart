import React, { useEffect } from "react";
import { Card, Container, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from "./Loader";
import { IoPricetagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { addToCart, removeSelectedProduct } from "../actions";

const ProductDetail = ({
  selectedProduct,
  addToCart,
  removeSelectedProduct,
}) => {
  useEffect(() => {
    return () => {
      removeSelectedProduct();
    };
  }, [removeSelectedProduct]);
  const handleProductSelect = () => {
    addToCart(selectedProduct);
  };
  return (
    <div>
      <Container>
        {Object.keys(selectedProduct).length !== 0 ? (
          <Card className="mt-2">
            <Card.Header>{selectedProduct.title}</Card.Header>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Card.Img
                src={selectedProduct.image}
                className="mt-3 p-2"
                style={{
                  height: "150px",
                  width: "150px",
                  margin: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>{selectedProduct.title}</Card.Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <IoPricetagOutline size="2rem" color="#368B85" />
                  <h4
                    style={{ marginLeft: "10px" }}
                  >{`₹${selectedProduct.price}`}</h4>
                </div>
                <Alert variant="secondary">{selectedProduct.category}</Alert>
                <Card.Text>{selectedProduct.description}</Card.Text>
                <Button variant="outline-danger" onClick={handleProductSelect}>
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Add To Cart
                  </Link>
                </Button>
              </Card.Body>
            </div>
          </Card>
        ) : (
          <Loader label="Product" />
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedProduct: state.selectedProduct };
};

export default connect(mapStateToProps, { addToCart, removeSelectedProduct })(
  ProductDetail
);
