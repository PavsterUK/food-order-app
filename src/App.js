import React from "react";

import "./App.css";
import HomePage from "./HomePage/HomePage";
import CartSummaryModal from "./Cart/CartSummaryModal";
import MenuContext from "./contexts/MenuContext";

function App() {
 const menu = [
    {
      orderQty: 1,
      id: 1,
      title: "House Special Fish and Chips",
      description: "Battered fish with local farm chips, tartare sauce",
      price: 7.99,
    },
    {
      orderQty: 1,
      id: 2,
      title: "Line caught Grilled MonkFish ",
      description: "Grilled MonkFish caught today by local fishermen",
      price: 15.99,
    },
    {
      orderQty: 2,
      id: 3,
      title: "Pan Fried Prawns",
      description: "Fresh prawns fried with lemon, garlic and fresh chillies ",
      price: 8.99,
    },
    {
      orderQty: 1,
      id: 4,
      title: "Smoked Scottish Salmon",
      description: "Salmon fillet with roasted vegetables",
      price: 11.99,
    },
  ]


  return (
    <MenuContext.Provider value={menu}>
      <HomePage />
      <CartSummaryModal />
    </MenuContext.Provider>
  );
}

export default App;
