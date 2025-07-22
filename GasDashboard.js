import React, { useEffect } from 'react';
import GasChart from './GasChart';
import GasTable from './GasTable';
import useGasStore from '../stores/gasStore';

const GasDashboard = () => {
  const { fetchGasPrices } = useGasStore();

  useEffect(() => {
    fetchGasPrices();
    const interval = setInterval(fetchGasPrices, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h1>⛽ Real-Time Cross-Chain Gas Price Tracker</h1>
      <GasChart />
      <GasTable />
    </div>
  );
};

export default GasDashboard;