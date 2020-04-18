import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../firebase/firebase.utils";
// import { ReactComponent as Logo } from "../assets/RM-logo.svg";
import Logo from "../assets/RM-logo.png";
import CartIcon from "../components/cart-icon";
import CartDropdown from "../components/cart-dropdown";
import { selectCartHidden } from "../redux/cart/cart-selectors";
import { selectCurrentUser } from "../redux/user/user-selectors.js";
import "../styles/header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        <img className="logo" src={Logo} alt="" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option sign-out" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? "" : <CartDropdown />}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
