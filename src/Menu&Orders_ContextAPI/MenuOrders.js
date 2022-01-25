
let menu = [
  {
    orderQty: 0,
    id: 1,
    title: "House Special Fish and Chips",
    description: "Battered fish with local farm chips, tartare sauce",
    price: 7.99,
  },
  {
    orderQty: 0,
    id: 2,
    title: "Line caught Grilled MonkFish ",
    description: "Grilled MonkFish caught today by local fishermen",
    price: 15.99,
  },
  {
    orderQty: 0,
    id: 3,
    title: "Pan Fried Prawns",
    description: "Fresh prawns fried with lemon, garlic and fresh chillies ",
    price: 8.99,
  },
  {
    orderQty: 0,
    id: 4,
    title: "Smoked Scottish Salmon",
    description: "Salmon fillet with roasted vegetables",
    price: 11.99,
  },
];

export const MenuOrders = React.createContext(menu[1]);