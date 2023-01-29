import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { useState } from "react";
import { ChartData } from "chart.js";

ChartJS.register(CategoryScale);

function LineChart(props: { coordinates: any[]; xlabel: string }) {
  const [graphData, _] = useState<ChartData<"line", any[], any>>({
    labels: props.coordinates.map((data) => data.xData),
    datasets: [
      {
        label: props.xlabel,
        data: props.coordinates.map((data) => data.yData),
        backgroundColor: ["#FEBD1B"],
        borderColor: "#FEBD1B",
        borderWidth: 1,
      },
    ],
  });

  return <Line data={graphData} height={100} />;
}

export default LineChart;
