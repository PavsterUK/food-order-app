import React, { useState } from "react";

import "./App.css";
import HomePage from "./HomePage/HomePage";
import CartSummaryModal from "./Cart/CartSummaryModal";
import {ItemsToOrderContext} from "./contexts/ItemsToOrderContext";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const [itemsToOrder, setItemsToOrder] = useState([]);
  const value = { itemsToOrder, setItemsToOrder };

  return (
    <ItemsToOrderContext.Provider value={value}>
      <HomePage setCartIsOpen={setCartIsOpen} />
      {cartIsOpen && <CartSummaryModal setCartIsOpen={setCartIsOpen} />}
    </ItemsToOrderContext.Provider>
  );
}

export default App;
