import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  addedToCartSelectedCategoryProduct,
  removeSelectedCategory,
  fetchProduct
} from "../actions";
import Loader from "./reusable components/Loader";
import Card from "./reusable components/Card";



const Category = ({
  selectedCategoryProduct,
  fetchProduct,
  addToCart,
  cart,
  addedToCartSelectedCategoryProduct,
  removeSelectedCategory
}) => {
  // const handleAddToCart = (product) => {
  //   if (product.addedToCart === true) {
  //     addQuantity(product.id);
  //   } else if (product.addedToCart === false) {
  //     addToCart(product);
  //     //   addedToCart(product.id);
  //     addedToCartSelectedCategoryProduct(product.id);
  //   } else return;
  // };

  useEffect(()=>{
    return ()=>{
      removeSelectedCategory();
    }
  },[removeSelectedCategory]);
  const renderSelectedCategoryProducts = () => {
    return (
      <div className="grid">
        {selectedCategoryProduct.map((product) => {
          return (
            <Card
              productTitle={product.title.split(" ").slice(0, 2).join(" ")}
              productImage={product.image}
              productDescription={product.description.slice(0, 80)}
              productPrice={product.price}
              title={product.title}
              product={product}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div className="container">
      {selectedCategoryProduct.length !== 0 ? renderSelectedCategoryProducts() : <Loader/>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedCategoryProduct: state.selectedCategoryProducts };
};

export default connect(mapStateToProps, {
  addToCart,
  addedToCartSelectedCategoryProduct,
  removeSelectedCategory,
  fetchProduct
})(Category);


{/* <Container>
{selectedCategoryProduct.length !== 0 ? (
  <Row xs={3} md={12} className="g-5">
    {selectedCategoryProduct.map((product) => {
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
                        to={`/products/${product.id}`}
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
</Container> */}