import axios from "axios";

/**
 * Fetch current cryptocurrency price from CoinGecko API.
 * @param coinId - The CoinGecko coin ID (e.g., bitcoin, ethereum)
 * @returns Current price in USD
 */
export async function getCryptoPrice(coinId: string): Promise<number> {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;

  const response = await axios.get(url);

  if (!response.data[coinId]) {
    throw new Error(`Coin ${coinId} not found`);
  }

  return response.data[coinId].usd;
}
