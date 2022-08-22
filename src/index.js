/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import studentDetails from "./StudentsData.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {studentDetails.map((data) => (
        <Route
          path={data.Name.split(" ")[0] + "_" + data.Name.split(" ")[1]}
          element={<App data={data} />}
        />
      ))}
    </Routes>
  </BrowserRouter>
);
