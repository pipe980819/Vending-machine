const express = require('express');

const priceService = require('./price/price');

const app = express();

app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  const price = priceService.productPrice(productId);
  res.send({ price });
});

app.listen(8081);
