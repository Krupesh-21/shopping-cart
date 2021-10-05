import React from "react";
import { fetchSelectedCategory } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SecondaryHeader = ({cName}) => {
  return (
    <div className={`secondary-header ${cName}`}>
      <ul>
        <li className="secondary-header-navigation">
          <Link className="header-link" to="/">
            Home
          </Link>
        </li>
        <li className="secondary-header-navigation">
          <Link
            className="header-link"
            to="/category/menswear"
            onClick={() => fetchSelectedCategory("men's clothing")}
          >
            Men's Wear
          </Link>
        </li>
        <li className="secondary-header-navigation">
          <Link
            className="header-link"
            to="/category/womenswear"
            onClick={() => fetchSelectedCategory("women's clothing")}
          >
            Women's Wear
          </Link>
        </li>
        <li className="secondary-header-navigation">
          <Link
            className="header-link"
            to="/category/electronics"
            onClick={() => fetchSelectedCategory("electronics")}
          >
            electronics
          </Link>
        </li>
        <li className="secondary-header-navigation">
          <Link
            className="header-link"
            to="/category/jewelery"
            onClick={() => fetchSelectedCategory("jewelery")}
          >
            Jewelery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { fetchSelectedCategory })(SecondaryHeader);
