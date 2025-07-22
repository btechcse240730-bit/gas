import create from 'zustand';
import { ethers } from 'ethers';

const RPC_ENDPOINTS = {
  ethereum: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  polygon: "https://polygon-rpc.com",
  arbitrum: "https://arb1.arbitrum.io/rpc"
};

const useGasStore = create((set) => ({
  gasPrices: {},
  gasHistory: [],
  
  fetchGasPrices: async () => {
    try {
      const prices = {};
      for (const [chain, url] of Object.entries(RPC_ENDPOINTS)) {
        const provider = new ethers.providers.JsonRpcProvider(url);
        const gasPrice = await provider.getGasPrice();
        prices[chain] = parseFloat(ethers.utils.formatUnits(gasPrice, 'gwei')).toFixed(2);
      }
      set((state) => ({
        gasPrices: prices,
        gasHistory: [
          ...state.gasHistory,
          { time: Date.now() / 1000, value: parseFloat(prices.ethereum) }
        ].slice(-50)
      }));
    } catch (error) {
      console.error("Failed to fetch gas prices:", error);
    }
  }
}));

export default useGasStore;