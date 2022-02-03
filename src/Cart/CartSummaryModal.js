import React, { useContext } from "react";

import styles from "./CartSummaryModal.module.css";
import { FoodMenu } from "../FoodMenu/FoodMenu";
import { ItemsToOrderContext } from "../contexts/ItemsToOrderContext";
import { GetTotalPrice } from "../HelperFunctions/GetTotalPrice";

const CartSummaryModal = (props) => {
  const { itemsToOrder, setItemsToOrder } = useContext(ItemsToOrderContext);

  const cartBlurHandler = (e) => console.log(props.setCartIsOpen(false));

  const preventCardOnClick = (e) => console.log(e.stopPropagation());

  return (
    <div onClick={cartBlurHandler} className={styles.container}>
      <div onClick={preventCardOnClick} className={styles.card}>
        {Object.keys(itemsToOrder).map((key) => (
          <div>
            <div className={styles.cart__item}>
              <div className={styles.cart_item__desc}>
                <h4>{FoodMenu[key].title}</h4>
                <h5>Price: £{FoodMenu[key].price}</h5>
              </div>
              <div className={styles.qtyControl}>
                <h5>{"Qty: " + itemsToOrder[key]}</h5>
                <button>-</button>
                <button>+</button>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <div className={styles.totalAmount}>
          <h3>Total Amount:</h3>
          <h4>£{GetTotalPrice(FoodMenu, itemsToOrder)}</h4>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryModal;
