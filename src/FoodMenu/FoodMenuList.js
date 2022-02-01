import React, {useContext} from "react";
import styles from "./FoodMenuList.module.css";

import TopOrnam from "../Images/top-ornament.png";
import BotOrn from "../Images/bottom-ornament.png";
import FoodMenuItem from "./FoodMenuItem";
import { FoodMenu } from "./FoodMenu";


const FoodMenuList = () => {
  
  return (
      <div className={styles.container}>
        <h1>Our Menu</h1>
        <img className={styles.top_orn} src={TopOrnam} />
        <br />
        <hr />
        <div className={styles.items}>
          {FoodMenu.map((item) => (
            <FoodMenuItem
              key={item.id}
              title={item.title}
              desc={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
          Thank You!
        </div>
        <img className={styles.bott_orn} src={BotOrn} />
      </div>
  );
};

export default FoodMenuList;
