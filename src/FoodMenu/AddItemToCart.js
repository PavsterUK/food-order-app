import React, { useState, useContext } from "react";

import styles from "./AddItemToCart.module.css";
import { ItemsToOrderContext } from "../contexts/ItemsToOrderContext";

const AddItemToCart = (props) => {
  
  const {itemsToOrder, setItemsToOrder} = useContext(ItemsToOrderContext);

  const [itemQty, setItemQty] = useState(1);

  const itemQtyChangeHandler = (event) => {
    setItemQty(event.target.value);
  };

  const addtoCartHandler = (event) => {
    event.preventDefault();
    setItemsToOrder(...itemsToOrder ,{ id: props.id, qty: itemQty });
  };

  return (
    <div className={styles.container}>
      <form>
        <label>Qty</label>
        <input
          onChange={itemQtyChangeHandler}
          value={itemQty}
          type="number"
          min="1"
        />
        <br />
        <button onClick={addtoCartHandler}>Add </button>
      </form>
    </div>
  );
};

export default AddItemToCart;
