import React from 'react';

const GetTotalPrice = (menu, orderedItems) => {
  sum = 0;

  orderedItems.forEach(item => 
    sum += item.qty * menu
    ) 

};
