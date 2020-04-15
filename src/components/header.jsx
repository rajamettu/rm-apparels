import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase/firebase.utils";
// import { ReactComponent as Logo } from "../assets/RM-logo.svg";
import Logo from "../assets/RM-logo.png";
import "../styles/header.scss";

const Header = ({ currentUser }) => {
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
        {console.log("Current User > ", currentUser)}
        {currentUser ? (
          <div className="option sign-out" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
