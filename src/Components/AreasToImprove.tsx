/** @format */

import "../Styles/AreasToImprove.css";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AreasToImprove = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr"];

  const data = {
    labels,
    datasets: [
      {
        barPercentage: 1,
        label: "",
        data: [10, 12, 20, 20],
        minBarLength: 2,
        backgroundColor: [
          "rgb(34,183,157)",
          "rgb(234,168,242)",
          "rgb(254,120,118)",
          "rgb(150,157,254)",
        ],
      },
    ],
  };
  return (
    <div className="areas-to-improve-card">
      <p id="heading-4">Areas To Improve</p>
      <Bar data={data} />
    </div>
  );
};

export default AreasToImprove;
