import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSelectedCategory } from "../actions";
import Button from "./Button";
import SecondaryHeader from "./SecondaryHeader";

const Header = ({ fetchSelectedCategory, cart, myOrder }) => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  return (
    <div className="header">
      <header>
        <nav>
          <button
            className="hamburger-menu-btn"
            onClick={() => setHamburgerClicked(!hamburgerClicked)}
          >
            {hamburgerClicked ? (
              <i class="fas fa-times"></i>
            ) : (
              <i class="fas fa-bars"></i>
            )}
          </button>
          {hamburgerClicked && <SecondaryHeader cName="transition" />}
          <ul>
            <li className="header-navigation">
              <Link className="header-link" to="/">
                Home
              </Link>
            </li>
            <li className="header-navigation">
              <Link
                className="header-link"
                to="/category/menswear"
                onClick={() => fetchSelectedCategory("men's clothing")}
              >
                Men's Wear
              </Link>
            </li>
            <li className="header-navigation">
              <Link
                className="header-link"
                to="/category/womenswear"
                onClick={() => fetchSelectedCategory("women's clothing")}
              >
                Women's Wear
              </Link>
            </li>
            <li className="header-navigation">
              <Link
                className="header-link"
                to="/category/electronics"
                onClick={() => fetchSelectedCategory("electronics")}
              >
                electronics
              </Link>
            </li>
            <li className="header-navigation">
              <Link
                className="header-link"
                to="/category/jewelery"
                onClick={() => fetchSelectedCategory("jewelery")}
              >
                Jewelery
              </Link>
            </li>
            <li>
              <Link className="header-link" to="/myorders">
                <Button
                  btnName="My Order"
                  icon={<i class="fas fa-shopping-bag"></i>}
                  length={myOrder.length}
                />
              </Link>
            </li>
            <li>
              <Link className="header-link" to="/cart">
                <Button
                  btnName="Cart"
                  icon={<i class="fas fa-shopping-cart"></i>}
                  length={cart.length}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapDispatchToProps = { fetchSelectedCategory };

const mapStateToProps = (state) => {
  return { cart: state.cart, myOrder: state.myOrder };
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
