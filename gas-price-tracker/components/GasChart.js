import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import useGasStore from '../stores/gasStore';

const GasChart = () => {
  const chartRef = useRef();
  const { gasHistory } = useGasStore();

  useEffect(() => {
    const chart = createChart(chartRef.current, { width: 600, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData(gasHistory);

    return () => chart.remove();
  }, [gasHistory]);

  return <div ref={chartRef} />;
};

export default GasChart;