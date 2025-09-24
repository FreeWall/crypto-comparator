/**
 * @param from - source currency (e.g., BTC, LTC, ETH, USDC, USDT).
 * @param to - target currency (e.g., BTC, LTC, ETH, USDC, USDT).
 *
 * Some valid pairs:
 * - [BTC, USDT]
 * - [BTC, USDC]
 * - [ETH, USDT]
 * - [ETH, USDC]
 * - [LTC, USDT]
 * - [LTC, USDC]
 */

export async function getCoinbasePrice(from: string, to: string) {
  return (await fetch(`https://api.coinbase.com/v2/prices/${from}-${to}/buy`)).json();
}

export async function getBinancePrice(from: string, to: string) {
  return (await fetch(`https://api4.binance.com/api/v3/ticker/price?symbol=${from}${to}`)).json();
}

export async function getKrakenPrice(from: string, to: string) {
  return (await fetch(`https://api.kraken.com/0/public/Ticker?pair=${from}${to}`)).json();
}
