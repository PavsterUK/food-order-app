import React, { useContext } from "react";

import styles from "./CartSummaryModal.module.css";
import { FoodMenu } from "../FoodMenu/FoodMenu";
import {ItemsToOrderContext} from "../contexts/ItemsToOrderContext";

const CartSummaryModal = (props) => {
  const menu = useContext(ItemsToOrderContext);
  let totalAmmount = 0;

  //Calculate total price for ordered items
  FoodMenu.forEach((item) => {
    if (item.orderQty > 0) {
      totalAmmount += item.price * item.orderQty;
    }
  });

  const cartBlurHandler = (e) => console.log(
    props.setCartIsOpen(false)
  );

  const preventCardOnClick = (e) => console.log(
    e.stopPropagation()
  );
  

  return (
    <div onClick={cartBlurHandler} className={styles.container}>
      <div onClick={preventCardOnClick} className={styles.card}>
        {FoodMenu
          .filter((ordered) => ordered.orderQty > 0)
          .map((item) => (
            <div>
              <div className={styles.cart__item}>
                <div className={styles.cart_item__desc}>
                  <h4>{item.title}</h4>
                  <h5>Price: £{item.price}</h5>
                </div>
                <div className={styles.qtyControl}>
                  <h5>{"Qty: " + item.orderQty}</h5>
                  <button>-</button>
                  <button>+</button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        <div className={styles.totalAmount}>
          <h3>Total Amount:</h3>
          <h4>£{totalAmmount}</h4>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryModal;
