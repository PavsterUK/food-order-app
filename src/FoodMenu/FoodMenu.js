import React from "react";
import styles from "./FoodMenu.module.css";

import TopOrnam from "../Images/top-ornament.png";
import BotOrn from "../Images/bottom-ornament.png";
import FoodMenuItem from "./FoodMenuItem";


const FoodMenu = () => {
  const DUMMY_MENU = [
    {
      title: "House Special Fish and Chips",
      description: "Battered fish with local farm chips, tartare sauce",
      price: 7.99,
    },
    {
      title: "Line caught Grilled MonkFish ",
      description: "Grilled MonkFish caught today by local fishermen",
      price: 15.99,
    },
    {
      title: "Pan Fried Prawns",
      description: "Fresh prawns fried with lemon, garlic and fresh chillies ",
      price: 8.99,
    },
    {
      title: "Smoked Scottish Salmon",
      description: "Salmon fillet with roasted vegetables",
      price: 11.99,
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Our Menu</h1>
      <img className={styles.top_orn} src={TopOrnam} />
      <br />
      <hr />
      <div className={styles.items}>
        {DUMMY_MENU.map((item) => (
          <FoodMenuItem
            title={item.title}
            desc={item.description}
            price={item.price}
          />
        ))}
        Thank You!
      </div>
      <img className={styles.bott_orn} src={BotOrn} />
    </div>
  );
};

export default FoodMenu;
