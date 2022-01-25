import React, { Fragment, createContext } from "react";

import "./App.css";
import HomePage from "./HomePage/HomePage";
import CartSummaryModal from "./Cart/CartSummaryModal";
import { MenuOrders } from "./Menu&Orders_ContextAPI/MenuOrders";

function App() {

  return (
    <React.Fragment>
      <MenuOrders.Provider value={menu}>
        <HomePage />
        <CartSummaryModal />
      </MenuOrders.Provider>
    </React.Fragment>
  );
}

export default App;
