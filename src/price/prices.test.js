const prices = require('./price');

test('prices "papas margarita"', () => {
  expect(prices.productPrice('B1'))
    .toBe(2300);
});


test('exchange "papas margarita, 5000"', () => {
  expect(prices.exchange('B1', 5000))
    .toBe(2700);
});
