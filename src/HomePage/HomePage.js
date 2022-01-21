import React from "react";

import Header from "../HomePage/Header";
import styles from "./HomePage.module.css";
import Card from "../GUI/Card";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <div className={styles.bg_img}>
        <div className={styles.slogan}>
          <h1>Fish and chips worth forking out for. </h1>
        </div>
      </div>
      <div className={styles.about}>
        <Card>
          <p>
            Lorem ipsum dolor sit amet. Qui labore eaque 33 tempore unde id
            internos aspernatur non sunt quia vel quidem voluptas sed voluptas
            eaque. Qui sunt maxime a fugiat minima ab iure ipsum in ratione
            consequuntur qui repellat repudiandae qui voluptatem maiores. Ut
            mollitia quaerat aut consequatur dolor aut eveniet esse non placeat
            autem. Sed velit minima ex quasi dolores sed placeat consequatur non
            maxime minima est asperiores doloribus est provident exercitationem.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
