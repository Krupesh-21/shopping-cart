import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import "../App.css";
import Header from "./Header";
import { connect } from "react-redux";
import Category from "./Category";
import UserDetails from "./UserDetails";
import PlaceOrder from "./PlaceOrder";
import MyOrder from "./MyOrder";
import Empty from "./Empty";

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
          <Route path="/category/:categoryName" render={() => <Category />} />
          <Route path="/products/:productId" render={() => <ProductDetail />} />
          <Route>
            <Empty
              label="No Items found!!"
              icon={<i class="fas fa-exclamation-triangle"></i>}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default connect(null)(App);
