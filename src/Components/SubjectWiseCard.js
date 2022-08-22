import React from "react";
import "../Styles/SubjectWiseCard.css";
const SubjectWiseCard = (props) => {
  return (
    <div>
      <img
        className={"card-bg"}
        src={
          window.location.origin +
          `/SubjectwiseBackground/${props.gradient}.svg`
        }
        alt={"company"}
      />
      <p className="subject">{props.subject}</p>
      <p className="percentile-score-text">Percentile Score</p>
      <p className="percentile-score" style={{ color: `${props.textColor}` }}>
        {props.percentile}
      </p>
    </div>
  );
};

export default SubjectWiseCard;
