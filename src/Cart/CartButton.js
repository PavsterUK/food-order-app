import React, {useContext} from "react";

import styles from "./CartButton.module.css";
import CartIcon from "../Images/pngwing.com.png";
import CountOrderedItems from "../HelperFunctions/CountOrderedItems";
import {ItemsToOrderContext} from "../contexts/ItemsToOrderContext";

const CartButton = (props) => {

  const {itemsToOrder, setItemsToOrder} = useContext(ItemsToOrderContext);

  const openCart = () => {
    props.setCartIsOpen(true)
  }

  return (
    <div onClick={openCart} className={styles.cart_icon}>
      <img src={CartIcon}></img>
      <p>Your Cart</p>
      <div className={styles.quantity}>
        {itemsToOrder.qty}
      </div>
    </div>
  );
};

export default CartButton;
