import React from "react";

import styles from "./FoodMenuItem.module.css";
import AddItemToCart from "./AddItemToCart";

const FoodMenuItem = (props) => {
  return (
    <div className={styles.container}>
      <h4>{props.title}</h4>
      <br />
      <p>{props.desc}</p>
      <br />£{props.price}
      <AddItemToCart/>
      <hr />
    </div>
  );
};

export default FoodMenuItem;
