/** @format */

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../Styles/AttemptAnalysis.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const AttemptAnalysis = (props) => {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "# of Votes",
        data: [props.Correct, props.Incorrect],
        backgroundColor: ["rgb(34,183,157)", "rgb(254,120,118)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="attempt-analysis-card">
      <p id="heading-3">Attempt Analysis</p>
      <Doughnut data={data} />
    </div>
  );
};

export default AttemptAnalysis;
