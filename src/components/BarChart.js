import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'


const BarChart = ({chartData}) => {
  return (
    <div>
      <h1>Bar Chart</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
