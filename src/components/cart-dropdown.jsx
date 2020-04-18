import React from "react";
import { connect } from "react-redux";

import CustomButton from "../components/custom-button";
import CartItem from "./cart-item";
import { selectCartItems } from "../redux/cart/cart-selectors.js";

import "../styles/cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
