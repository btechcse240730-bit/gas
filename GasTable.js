import React from 'react';
import useGasStore from '../stores/gasStore';

const GasTable = () => {
  const { gasPrices } = useGasStore();

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Chain</th>
          <th>Gas Price (Gwei)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(gasPrices).map(([chain, price]) => (
          <tr key={chain}>
            <td>{chain}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GasTable;