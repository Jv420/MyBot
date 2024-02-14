// utils/price.ts
import axios from 'axios';

export const getPriceFromApi = async (tokenSymbol: string): Promise<number> => {
  const response = await axios.get(`${process.env.PRICE_API}/${tokenSymbol}`);
  return response.data.price;
};
