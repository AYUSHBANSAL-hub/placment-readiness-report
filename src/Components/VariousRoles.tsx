import React from 'react';
import ProgressBar from './ProgressBar.tsx';
const VariousRoles = () => {
  function color(percentage){
    if(percentage<33)
      return "#C0352C";
      else if(percentage<66)
      return "#E2B645";
      else return "#1C9127"
  }
  return (
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
      <div>
        <ProgressBar role="SDE (Software Development Engineer)" bgcolor={color(10)} progress="10" height="6px"/>
        <ProgressBar role="Backend Engineer" bgcolor={color(60)} progress="60" height="6px"/>
        <ProgressBar role="QA or SDET (SDE at Test)" bgcolor={color(40)} progress="40" height="6px"/>
        <ProgressBar role="Data Analyst" bgcolor={color(50)} progress="50" height="6px"/>
        <ProgressBar role="Entrepreneur" bgcolor={color(15)} progress="15" height="6px"/>
      </div>
      <div>        
        <ProgressBar role="Frontend Engineer" bgcolor={color(85)} progress="85" height="6px"/>
        <ProgressBar role="Full Stack Developer " bgcolor={color(70)} progress="70" height="6px"/>
        <ProgressBar role="Business Analyst or Consultant" bgcolor={color(15)} progress="15" height="6px"/>
        <ProgressBar role="Non-IT Job" bgcolor={color(40)} progress="40" height="6px"/>
        <ProgressBar role="Others" bgcolor={color(60)} progress="60" height="6px"/>
      </div>
    </div>
  )
}

export default VariousRoles