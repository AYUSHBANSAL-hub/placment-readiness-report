/** @format */

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../Styles/OverallPerformance.css";

const OverallPerformance = (props) => {
  return (
    <div className="TotalPercentile">
      <h1 className="OverallHeading">Overall Performance</h1>
      <div className="TotalPercentileCard-1">
        {/* <div className="Progress-circular">
          <CircularProgressbar
            value={props.Percentile}
            text={`${props.Percentile}%`}
            styles={buildStyles({
              textColor: "#ffa629",
              pathColor: "#ffa629",
              trailColor: "#8093ae",
            })}
          />
        </div> */}
        <div className="circle-wrap">
          <div
            class="pie animate"
            style={{ "--p": `${props.Percentile}`, "--c": "white" }}
          >
            <span className="inner-value">{props.Percentile}%</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3> Total Percentile</h3>
          <h2> {props.Percentile}%ile</h2>
        </div>
      </div>
      <div className="TotalPercentileCard-2">
        {/* <div className="Progress-circular">
          <CircularProgressbar
            value={props.Average_Accuracy}
            text={`${props.Average_Accuracy}%`}
            styles={buildStyles({
              textColor: "#ffffff",
              pathColor: "#ffffff",
              trailColor: "#85a5d2",
            })}
          />
        </div> */}
        <div className="circle-wrap">
          <div
            class="pie"
            style={{ "--p": `${props.Average_Accuracy}`, "--c": "white" }}
          >
            <span className="inner-value-2">{props.Average_Accuracy}%</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3> Average Accuracy</h3>
          <h2>{props.Average_Accuracy}%</h2>
        </div>
      </div>
    </div>
  );
};

export default OverallPerformance;
