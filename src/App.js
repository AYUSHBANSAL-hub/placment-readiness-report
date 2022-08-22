/** @format */

import "./App.css";
import React, { useRef } from "react";
import { exportComponentAsPDF } from "react-component-export-image";
import ReactDOMServer from "react-dom/server";
// import OverallPerformance from "./Components/OverallPerformance.tsx";
// import TopBanner from "./Images/TopBanner.svg";
// import Rank from "./Images/Rank.svg";
// import SubjectWiseCard from "./Components/SubjectWiseCard.tsx";
//import VariousRoles from "./Components/VariousRoles.tsx";
// import AttemptAnalysis from "./Components/AttemptAnalysis.tsx";
// import AreasToImprove from "./Components/AreasToImprove.tsx";
import Page from "./Page.js";
import { mailsToAll } from "./mail_script";
//import Pdf from "react-to-pdf";
//import html2canvas from "html2canvas";
//import { jsPDF } from "jspdf";
//const ref = React.createRef();
//const Foo = <b>foo</b>;
const pdfOptions = {
  w: 210,
  h: 290,
  x: 0,
  y: 0,
};
//const doc = new jsPDF();
const App = ({ data }) => {
  // const save = () => {
  //   doc.html(ReactDOMServer.renderToStaticMarkup(<Page data={data} />), {
  //     callback: () => {
  //       doc.save("myDocument.pdf");
  //     },
  //   });
  // };
  // const printRef = React.useRef();

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
  const componentRef = useRef();
  // mailsToAll();

  const mail = () => {
    mailsToAll();
  };

  return (
    <div className="App">
      {/* <Pdf targetRef={ref} filename="code-example.pdf" scale={1.34}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
      {/* <button type="button" onClick={handleDownloadPdf}> */}
      {/* <button type="button" onClick={save}>
        Download as PDF
      </button> */}
      <button onClick={mail}>Send Mail</button>
      <button
        onClick={() => exportComponentAsPDF(componentRef, { pdfOptions })}
      >
        Export As PDF
      </button>
      <div ref={componentRef}>
        <Page data={data} />
      </div>
    </div>
  );
};

export default App;
