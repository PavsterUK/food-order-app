import React from "react";

import Card from "../GUI/Card";

const FoodMenu = () => {
  const DUMMY_MENU = [
    {
      title: "House Special Fish and Chips",
      description: "Battered fish with local farm chips, tartare sauce",
      price: 7.99,
    },
    {
      title: "Line caught Grilled MonkFish ",
      description: "Grilled MonkFish caught today by local fishermen",
      price: 15,
    },
    {
      title: "Pan Fried Prawns",
      description: "Fresh prawns fried with lemon, garlic and fresh chillies ",
      price: 8.99,
    },
    {
      title: "Smoked Scottish Salmon",
      description: "Salmon fillet with roasted vegetables",
      price: 11.99,
    },
  ];

  return (
    <Card>
      <div>
        <ul>
          {DUMMY_MENU.map((item) => (
            <li>{item.title}, {item.description}, {item.price}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default FoodMenu;
