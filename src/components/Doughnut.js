import React from "react";
import { Doughnut } from 'react-chartjs-2';
// import Chart as ChartJS to fix blank page issue
import { Chart as ChartJS } from 'chart.js/auto';


const DoughnutChart = ({chartData}) => {
  return (
    <div>
      <h1>Doughnut Chart</h1>
      <Doughnut data={chartData} />
    </div>
  );
};

export default DoughnutChart;
