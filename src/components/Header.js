import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSelectedCategory } from "../actions";
import AddToCartButton from "./AddToCartButton";
import MyOrderButton from "./MyOrderButton";

const Header = ({ fetchSelectedCategory }) => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>
              <Link className="header-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="/category/menswear"
                onClick={() => fetchSelectedCategory("men's clothing")}
              >
                Men's Wear
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="/category/womenswear"
                onClick={() => fetchSelectedCategory("women's clothing")}
              >
                Women's Wear
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="/category/electronics"
                onClick={() => fetchSelectedCategory("electronics")}
              >
                electronics
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="/category/jewelery"
                onClick={() => fetchSelectedCategory("jewelery")}
              >
                Jewelery
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="/myorders"
              >
                <MyOrderButton/>
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="/cart"
              >
                <AddToCartButton/>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default connect(null, { fetchSelectedCategory })(Header);
