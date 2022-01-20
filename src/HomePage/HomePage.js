import React from "react";

import Header from "../HomePage/Header";
import styles from "./HomePage.module.css";


const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <div className={styles.bg_img}></div>
    </div>
  );
};

export default HomePage;
