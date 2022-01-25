import React from "react";

import styles from "./CartSummaryModal.module.css";

const CartSummaryModal = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p>Total Amount</p>
      </div>
    </div>
  );
};

export default CartSummaryModal;
