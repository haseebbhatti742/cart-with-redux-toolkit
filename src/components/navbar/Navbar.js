import React from "react";
import classes from "./navbar.module.scss";
import hamburgerSVG from "../../assets/images/hamburger.svg";
import logo from "../../assets/images/logo.PNG";
import user from "../../assets/images/user.png";
import search from "../../assets/images/search.svg";
import bag from "../../assets/images/bag.png";
import { ROUTES } from "../router/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems } from "../features/cart/cartSlice";

function Navbar() {
  const cartItems = useSelector(getCartItems);
  return (
    <>
      <div className={classes["message-bar"]}>
        <h4>Free delivery for orders above PKR 2500/-</h4>
      </div>
      <div className={classes["navbar"]}>
        <div className={classes["hamburger"]}>
          <img src={hamburgerSVG} alt="Hamburger" />
        </div>
        <div className={classes["menu"]}>
          {ROUTES.map((route) =>
            route.title !== "Cart" ? (
              <p key={route.id}>
                <Link key={route.id} to={route.route}>
                  {route.title}
                </Link>
              </p>
            ) : (
              <></>
            )
          )}
        </div>
        <div className={classes["logo"]}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={classes["options"]}>
          <img src={user} alt="User" />
          <img src={search} alt="Search" />
          <Link to={ROUTES[2].route}>
            <img src={bag} alt="Cart" />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
