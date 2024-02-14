// utils/ethers.ts
import { ethers } from 'ethers';

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
};

export const getWallet = () => {
  return new ethers.Wallet(process.env.PRIVATE_KEY, getProvider());
};

export const getContract = () => {
  return new ethers.Contract(process.env.CONTRACT_ADDRESS, JSON.parse(process.env.CONTRACT_ABI), getWallet());
};