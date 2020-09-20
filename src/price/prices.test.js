const prices = require('./price');

test('prices "papas margarita"', () => {
  expect(prices.productPrice('Papas margaritas'))
    .toBe(2300);
})