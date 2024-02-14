// pages/index.tsx
import React, { useState } from 'react';
import { getWallet, getContract } from '../utils/ethers';
import { getPriceFromApi } from '../utils/price';


const ArbitrageBot: React.FC = () => {
  const [privateKey, setPrivateKey] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [arbitrageProfit, setArbitrageProfit] = useState<number | null>(null);

  const handleRunBot = async () => {
    const wallet = getWallet();
    const contract = getContract();
    const currentPrice = await getPriceFromApi(tokenSymbol);

    // Implement your arbitrage logic here

    // Update arbitrageProfit based on your logic
    setArbitrageProfit(calculatedProfit);
  };

  return (
    <div>
      <h1>Arbitrage Bot</h1>
      <label>
        Private Key:
        <input type="text" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
      </label>
      <label>
        Token Symbol:
        <input type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
      </label>
      <button onClick={handleRunBot}>Run Arbitrage Bot</button>
      {arbitrageProfit !== null && <p>Estimated Profit: {arbitrageProfit}</p>}
    </div>
  );
};

export default ArbitrageBot;
