const express = require('express');
const app = express();

const pair = ['BTC', 'USDT'];

function coinbase() {
  const data = fetch(`https://api.coinbase.com/v2/prices/${pair[0]}-${pair[1]}/buy`);
  return data
    .then((response) => response.json())
    .then((json) => json.data.amount)
    .catch((error) => {
      console.error('Error fetching Coinbase data:', error);
      return 'Error fetching data';
    });
}

function binance() {
  const data = fetch(`https://api4.binance.com/api/v3/ticker/price?symbol=${pair[0]}${pair[1]}`);
  return data
    .then((response) => response.json())
    .then((json) => json.price)
    .catch((error) => {
      console.error('Error fetching Binance data:', error);
      return 'Error fetching data';
    });
}

function kraken() {
  const data = fetch(`https://api.kraken.com/0/public/Ticker?pair=${pair[0]}${pair[1]}`);
  return data
    .then((response) => response.json())
    .then((json) => json.result.XBTUSDT.c[0])
    .catch((error) => {
      console.error('Error fetching Kraken data:', error);
      return 'Error fetching data';
    });
}

app.get('/', async (req, res) => {
  res.send({
    coinbase: await coinbase(),
    binance: await binance(),
    kraken: await kraken(),
  });
});

app.listen(3000, () => console.log('Server ready on port 3000'));

module.exports = app;
