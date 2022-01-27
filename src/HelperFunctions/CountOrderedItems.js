
const CountOrderedItems = (items) => {
  let NumOrderedItems = 0;

  items.filter((item) => {
    if (item.orderQty > 0) {
      NumOrderedItems += item.orderQty;
    }
  });
    
  return NumOrderedItems;
};

export default CountOrderedItems;
