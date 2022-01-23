import React from "react";

import Header from "../HomePage/Header";
import styles from "./HomePage.module.css";
import Card from "../GUI/Card";
import FoodMenu from "../FoodMenu/FoodMenu";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.paralellogram_shaped_div}>
        <Card>
          <p>
            Lorem ipsum dolor sit amet. Qui labore eaque 33 tempore unde id
            internos aspernatur non sunt quia vel quidem voluptas sed voluptas
            eaque. Qui sunt maxime a fugiat minima ab iure ipsum in ratione
            consequuntur qui repellat repudiandae qui voluptatem maiores.
          </p>
        </Card>
      </div>
      <div className={styles.slogan}>
        <h1>Fish and chips worth forking out for. </h1>
      </div>
      <FoodMenu />
    </div>
  );
};

export default HomePage;
