import React from 'react'

import styles from './Header.module.css'
import Button from "../GUI/Button";
//import fishImage from "../"


const Header = () => {
  return (
    <div className={styles.header}>
      <img src={fishImage}/>
      <h1>Pav's Fish and Chips!</h1>
      <Button/>
     </div>
  )
}


export default Header
