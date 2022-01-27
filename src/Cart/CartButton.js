import React from "react";

import styles from "./CartButton.module.css";
import CartIcon from "../Images/pngwing.com.png";
import MenuContext from "../contexts/MenuContext";
import CountOrderedItems from "../HelperFunctions/CountOrderedItems";

const CartButton = () => {

  const contextItems = React.useContext(MenuContext);


  return (
    <div className={styles.cart_icon}>
      <img src={CartIcon}></img>
      <p>Your Cart</p>
      <div className={styles.quantity}>
        {CountOrderedItems(contextItems)}
      </div>
    </div>
  );
};

export default CartButton;
