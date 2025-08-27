# Crypto comparator

Create a client/server application that allows users to compare cryptocurrency exchange rates from various partners.

### Recommended technologies:

- React
- TypeScript
- Node.js

## Frontend (SPA)

Create a single page website with these components:

- **Offer form**: Implement a form that allows users to input:
  - Source token: The cryptocurrency they wish to send (e.g., BTC, ETH, USDT, USDC).
  - Source amount: The quantity of cryptocurrency they wish to exchange.
  - Target token: The cryptocurrency they wish to receive (e.g., BTC, ETH, USDT, USDC).

- **List of offers**: After submitting or updating the form, the application should display a list of individual offers from different partners, sorted by the best rate. Each offer should clearly present relevant information, such as:
  - The partner's name/logo.
  - The amount of target token the user would receive.
  - Button for selecting the offer (doesn't have to do anything for the purpose of this task).

## Backend (server)

The backend will be responsible for receiving the user's request from the SPA, querying various partner APIs for crypto exchange rates based on the provided amount, source token, and target token, and then returning the compared offers to the frontend.

### Public partner APIs you can use

- **Coinbase**: https://docs.cdp.coinbase.com/coinbase-app/docs/track/api-prices
- **Binance**: https://developers.binance.com/docs/convert/Introduction
- **Kraken**: https://docs.kraken.com/api/docs/rest-api/get-ticker-information/
