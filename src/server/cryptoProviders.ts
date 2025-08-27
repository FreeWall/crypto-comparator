export async function getCoinbasePrice(from: string, to: string) {
  return (await fetch(`https://api.coinbase.com/v2/prices/${from}-${to}/buy`)).json();
}

export async function getBinancePrice(from: string, to: string) {
  return (await fetch(`https://api4.binance.com/api/v3/ticker/price?symbol=${from}${to}`)).json();
}

export async function getKrakenPrice(from: string, to: string) {
  return (await fetch(`https://api.kraken.com/0/public/Ticker?pair=${from}${to}`)).json();
}
