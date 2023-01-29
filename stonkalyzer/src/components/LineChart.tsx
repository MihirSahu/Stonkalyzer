import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";

ChartJS.register(CategoryScale);

function LineChart( chartData ) {
  //return <Line data={chartData} />;
  return <div>test</div>
}

export default LineChart;