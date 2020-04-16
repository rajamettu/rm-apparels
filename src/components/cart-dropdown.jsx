import React from "react";

import CustomButton from "../components/custom-button";
import "../styles/cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
