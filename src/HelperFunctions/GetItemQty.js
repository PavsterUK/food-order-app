

export const GetItemQty = (order) => {
  let orderedItemQty = 0;

  for (const key in order) {
    orderedItemQty += order[key];
  }

  return orderedItemQty;
};
