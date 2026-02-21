import dotenv from "dotenv";
import { calculatePortfolioValue } from "./portfolio";

dotenv.config();

/**
 * Entry point of BlockPulse CLI application
 */
async function main() {
  const portfolio = [
    { coinId: "bitcoin", amount: 0.5 },
    { coinId: "ethereum", amount: 2 }
  ];

  try {
    const totalValue = await calculatePortfolioValue(portfolio);

    console.log("\n=========================");
    console.log(`Total Portfolio Value: $${totalValue.toFixed(2)}`);
    console.log("=========================");
  } catch (error) {
    console.error("Error calculating portfolio:", error);
  }
}

main();
