import React, { useContext } from "react";

import styles from "./CartSummaryModal.module.css";
import MenuContext from "../contexts/MenuContext";

const CartSummaryModal = () => {
  const menu = useContext(MenuContext);
  let totalAmmount = 0;

  //Calculate total price for ordered items
  menu.filter((item) => {
    if (item.orderQty > 0) {
      totalAmmount += item.price * item.orderQty;
    }
  });

  return (
    <div className={styles.container}>
      <div  className={styles.card}>
        {menu
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
