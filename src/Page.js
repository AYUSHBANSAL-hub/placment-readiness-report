/** @format */

import React from "react";
import OverallPerformance from "./Components/OverallPerformance.js";
import TopBanner from "./Images/TopBanner.svg";
import Rank from "./Images/Rank.svg";
import SubjectWiseCard from "./Components/SubjectWiseCard.js";
import VariousRoles from "./Components/VariousRoles.js";
import AttemptAnalysis from "./Components/AttemptAnalysis.js";
import AreasToImprove from "./Components/AreasToImprove.js";

const Page = ({ data }) => {
  return (
    <div>
      <img
        style={{ width: "595px", height: "121px" }}
        src={TopBanner}
        alt="Top Banner"
      />
      <div
        style={{ marginInline: "20px", position: "static" }}
        className="page-content"
      >
        <div className="overview-rank">
          <div>
            <div style={{ zIndex: "10", position: "static" }}>
              <p className="greeting">Hello {data.Name}!</p>
              <p className="checkReport">Check your progress report!</p>
              <p id="rank">#{data.Rank}</p>
            </div>
            <img
              style={{ marginTop: "-120px", zIndex: "-1", position: "static" }}
              src={Rank}
              alt="Top Banner"
            />
          </div>
          <div>
            <OverallPerformance
              Average_Accuracy={data.Average_Accuracy}
              Percentile={data.Overall_Percentile}
            />
          </div>
        </div>
        <div>
          <p className="heading-2">Subject-Wise Percentile Score</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <SubjectWiseCard
              gradient="first"
              subject="Full Stack"
              percentile={data.FrontEnd_and_BackEnd}
              textColor="#007965"
            />
            <SubjectWiseCard
              gradient="second"
              subject="Coding"
              percentile={data.Fundamental_Coding}
              textColor="#ED7DFF"
            />
            <SubjectWiseCard
              gradient="third"
              subject="Excel"
              percentile={data.MS_Excel}
              textColor="#FF5252"
            />
            <SubjectWiseCard
              gradient="fourth"
              subject="Aptitude"
              percentile={data.Aptitude}
              textColor="#6D75FF"
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <AttemptAnalysis Correct={data.Correct} Incorrect={data.Incorrect} />
          <AreasToImprove
            FrontEnd_and_BackEnd_Percentile={
              data.FrontEnd_and_BackEnd_Percentile
            }
            Fundamental_Coding_Percentile={data.Fundamental_Coding_Percentile}
            MS_Excel_Percentile={data.MS_Excel_Percentile}
            Aptitude_Percentile={data.Aptitude_Percentile}
          />
        </div>
        <div>
          <p
            className="heading-5"
            style={{ marginBottom: "-30px", marginTop: "10px" }}
          >
            Your preparation for variours roles
          </p>
          <VariousRoles
            Full_Stack_Web_Developer={data.Full_Stack_Web_Developer}
            Frontend_Developer={data.Frontend_Developer}
            Backend_Developer={data.Backend_Developer}
            Business_Analyst={data.Business_Analyst}
            Data_Analyst={data.Data_Analyst}
            Others={data.Others}
          />
        </div>
        {/* <div
          style={{
            backgroundColor: "#E5E7ED",
            height: "1px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div> */}
        {/* <p id="about-accio">
          <strong>AccioJob</strong> is an IIT Delhi alumni-led company that
          provides{" "}
          <strong>
            6 month Pay after Placement Full Stack Web Dev course.
          </strong>{" "}
          During the course, candidates are trained on 
          <strong>
            Data Structures and Algorithms, Full Stack Web Development and
            backend web development.
          </strong>
          Their students are already working at{" "}
          <strong>
            Amazon, Walmart, VISA, BharatPe, Paytm, ThoughtWorks and 190+ more
            companies.
          </strong>
        </p> */}
      </div>
    </div>
  );
};

export default Page;
