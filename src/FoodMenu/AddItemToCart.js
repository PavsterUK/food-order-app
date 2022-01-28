import React from "react";

import styles from "./AddItemToCart.module.css";

const AddItemToCart = () => {
  return (
    <div className={styles.container}>
      <form >
        <label>Qty</label>
        <input type="number" min="0"  />
        <br/>
        <button>Add </button>
      </form>
    </div>
  );
};

export default AddItemToCart;
