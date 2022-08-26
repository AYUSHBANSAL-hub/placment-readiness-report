/** @format */

import React from "react";
import ProgressBar from "./ProgressBar.js";
const VariousRoles = ({
  Full_Stack_Web_Developer,
  Frontend_Developer,
  Backend_Developer,
  Business_Analyst,
  Data_Analyst,
  Others,
}) => {
  function color(percentage) {
    if (percentage < 33) return "#C0352C";
    else if (percentage < 66) return "#E2B645";
    else return "#1C9127";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <div>
        <ProgressBar
          role="Full_Stack_Web_Developer"
          bgcolor={color(Full_Stack_Web_Developer)}
          progress={Full_Stack_Web_Developer}
          height="6px"
        />
        <ProgressBar
          role="Frontend_Developer"
          bgcolor={color(Frontend_Developer)}
          progress={Frontend_Developer}
          height="6px"
        />
        <ProgressBar
          role="Backend_Developer"
          bgcolor={color(Backend_Developer)}
          progress={Backend_Developer}
          height="6px"
        />
      </div>
      <div>
        <ProgressBar
          role="Business_Analyst"
          bgcolor={color(Business_Analyst)}
          progress={Business_Analyst}
          height="6px"
        />
        <ProgressBar
          role="Data_Analyst"
          bgcolor={color(Data_Analyst)}
          progress={Data_Analyst}
          height="6px"
        />
        <ProgressBar
          role="Others"
          bgcolor={color(Others)}
          progress={Others}
          height="6px"
        />
      </div>
    </div>
  );
};

export default VariousRoles;
