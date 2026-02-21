import { getCryptoPrice } from "./api";

/**
 * Represents a crypto asset in the portfolio
 */
export interface Asset {
  coinId: string;
  amount: number;
}

/**
 * Calculate total portfolio value in USD
 * @param assets - Array of crypto assets
 */
export async function calculatePortfolioValue(assets: Asset[]) {
  let total = 0;

  for (const asset of assets) {
    const price = await getCryptoPrice(asset.coinId);
    const value = price * asset.amount;

    console.log(
      `${asset.coinId.toUpperCase()}: $${price} x ${asset.amount} = $${value.toFixed(2)}`
    );

    total += value;
  }

  return total;
}
