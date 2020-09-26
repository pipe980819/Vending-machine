const express = require('express');

const priceService = require('./price/price');

const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());

app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  const price = priceService.productPrice(productId);
  res.send({ price });
});

app.get('/products', (req, res) => {
  res.send(priceService.products());
});

app.listen(8080, (err) => {
  if (!err) {
    console.log('running');
  }

});
