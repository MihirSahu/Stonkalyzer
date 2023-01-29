import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { useState } from "react";

ChartJS.register(CategoryScale);

function LineChart( props:{coordinates: any[], xlabel:string} ) {
  const [graphData, _] = useState({
    labels: props.coordinates.map((data) => data.xData),
    datasets: [
      {
        label: props.xlabel,
        data: props.coordinates.map((data) => data.yData),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  return <Line data={graphData} />;
}

export default LineChart;