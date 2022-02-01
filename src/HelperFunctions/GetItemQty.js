import React from "react";

export const GetItemQty = (items) => {
  let orderedItemQty = 0;

  items.forEach((item) => (orderedItemQty += item.qty));

  return orderedItemQty;
};
