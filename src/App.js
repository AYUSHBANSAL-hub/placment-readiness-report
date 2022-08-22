/** @format */

import "./App.css";
import React from "react";
import ReactDOMServer from "react-dom/server";
import OverallPerformance from "./Components/OverallPerformance.tsx";
import TopBanner from "./Images/TopBanner.svg";
import Rank from "./Images/Rank.svg";
import SubjectWiseCard from "./Components/SubjectWiseCard.tsx";
//import VariousRoles from "./Components/VariousRoles.tsx";
import AttemptAnalysis from "./Components/AttemptAnalysis.tsx";
import AreasToImprove from "./Components/AreasToImprove.tsx";
//import Pdf from "react-to-pdf";
//import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
//const ref = React.createRef();
const Foo = <b>foo</b>;
const doc = new jsPDF();
const save = () => {
  doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
    callback: () => {
      doc.save("myDocument.pdf");
    },
  });
};
const App = ({ data }) => {
  //const printRef = React.useRef();

  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF();
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = pdf.internal.pageSize.getHeight();
  //   // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  //   pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("print.pdf");
  // };

  return (
    <div className="App">
      {/* <Pdf targetRef={ref} filename="code-example.pdf" scale={1.34}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
      {/* <button type="button" onClick={handleDownloadPdf}> */}
      <button type="button" onClick={save}>
        Download as PDF
      </button>
      {/* <div ref={printRef}> */}
      <div>
        <img
          style={{ width: "595px", height: "121px" }}
          src={TopBanner}
          alt="Top Banner"
        />
        <div style={{ marginInline: "20px" }} className="page-content">
          <div className="overview-rank">
            <div>
              <div style={{ zIndex: "10" }}>
                <p className="greeting">Hello {data.Name}!</p>
                <p className="checkReport">Check your progress report!</p>
                <p id="rank">#{data.Rank}</p>
              </div>
              <img
                style={{ marginTop: "-100px", zIndex: "-1" }}
                src={Rank}
                alt="Top Banner"
              />
            </div>
            <div>
              <OverallPerformance
                Average_Accuracy={data.Average_Accuracy}
                Percentile={data.Percentile}
              />
            </div>
          </div>
          <div>
            <p className="heading-2">Subject-Wise Percentile Score</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <SubjectWiseCard
                gradient="first"
                subject="Full Stack"
                percentile={data.frontend_and_backend}
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
            <AttemptAnalysis
              Correct={data.Correct}
              Incorrect={data.Incorrect}
            />
            <AreasToImprove />
          </div>
          {/* <div>
            <p className="heading-5">Your preparation for variours roles</p>
            <VariousRoles />
          </div> */}
          <div
            style={{
              backgroundColor: "#E5E7ED",
              height: "1px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          ></div>
          <p id="about-accio">
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
