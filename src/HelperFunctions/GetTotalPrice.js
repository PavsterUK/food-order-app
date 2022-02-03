export const GetTotalPrice = (menu, orderedItems) => {
  let sum = 0;

  for (let id in orderedItems) {
    sum += menu[id].price * orderedItems[id];
  }

  return sum;
};
