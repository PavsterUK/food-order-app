import React from "react";

import styles from "./CartButton.module.css";
import CartIcon from "../Images/pngwing.com.png";

const CartButton = (props) => {
  return (
    <div className={styles.cart_icon}>
      <img src={CartIcon}></img>
      <p>Your Cart</p>
      <div className={styles.quantity}>
        0
      </div>
    </div>
  );
};

export default CartButton;
