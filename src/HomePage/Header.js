import React from "react";

import styles from "./Header.module.css";
import fishImage from "../Images/137-1372918_and-fish-and-chips-icon.png";
import CartButton from "../Cart/CartButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={fishImage} />
        <h1>Pav's Fish and Chips!</h1>
      </div>
      <CartButton/>
    </div>
  );
};

export default Header;
