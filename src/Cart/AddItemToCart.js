import React from "react";

import styles from "./AddItemToCart.module.css";

const AddItemToCart = () => {
  return (
    <div className={styles.container}>
      <form >
        <label>Amount</label>
        <input type="number" />
        <button>+Add</button>
      </form>
    </div>
  );
};

export default AddItemToCart;
