const prices = require('./price');

test('prices "papas margarita"', () => {
  expect(prices.productPrice('Papas margaritas'))
    .toBe(2300);
});


test('exchange "papas margarita, 5000"', () => {
  expect(prices.exchange('Papas margaritas', 5000))
    .toBe(2500);
});
