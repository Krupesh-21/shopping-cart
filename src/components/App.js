import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
// import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import "../App.css";
import Header from "./Header";
import { connect } from "react-redux";
import Category from "./Category";
import UserDetails from "./UserDetails";
import PlaceOrder from "./PlaceOrder";
import MyOrder from "./MyOrder";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact render={() => <Products />} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route
            path="/myorders"
            exact
            render={(props) => <MyOrder {...props} />}
          />
          <Route
            path="/userdetail"
            exact
            render={(props) => <UserDetails {...props} />}
          />
          <Route
            path="/userdetail/:id"
            exact
            render={(props) => <UserDetails {...props} />}
          />
          <Route
            path="/purchase/:id/:useremail"
            exact
            render={(props) => <PlaceOrder {...props} />}
          />
          <Route
            path="/purchase/:useremail"
            exact
            render={(props) => <PlaceOrder {...props} />}
          />
          <Route path="/category/menswear" exact render={() => <Category />} />
          <Route
            path="/category/womenswear"
            exact
            render={() => <Category />}
          />
          <Route
            path="/category/electronics"
            exact
            render={() => <Category />}
          />
          <Route path="/category/jewelery" exact render={() => <Category />} />
          <Route path="/products/:productId" render={() => <ProductDetail />} />
          <Route>404 Product Not Found!!</Route>
        </Switch>
      </Router>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { selectedCategoryProduct: state.selectedCategoryProducts };
// };

export default connect(null)(App);
