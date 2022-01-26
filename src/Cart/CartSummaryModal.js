import React, { useContext } from "react";

import styles from "./CartSummaryModal.module.css";
import MenuContext from "../contexts/MenuContext";

const CartSummaryModal = () => {
  const menu = useContext(MenuContext);
  let totalAmmount = 0;

  menu.filter((item) => {
    if (item.orderQty > 0) {
      totalAmmount += (item.price * item.orderQty);
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {menu
          .filter((ordered) => ordered.orderQty > 0)
          .map((item) => (
            <p>
              {item.title} {"x" + item.orderQty}
              <br />
              {item.price}
              <hr />
            </p>
          ))}
        <p>Total Amount : £{totalAmmount}</p>
      </div>
    </div>
  );
};

export default CartSummaryModal;
