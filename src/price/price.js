const prices = {
  'B1': { name: 'Papas margaritas', price: 2300, },
  'B2': { name: 'Choclitos', price: 800, },
};

exports.productPrice = (product) => {
  return prices[product].price;
};

exports.exchange = (product, pay) => {
  return pay - prices[product].price;
};