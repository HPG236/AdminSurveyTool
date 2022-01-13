import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
const Survey = () => {
  let [surveyRes, setsurveyRes] = useState(null);
  const location = useLocation();
  const myparam = location.state.params;
  const value = myparam;
  console.warn(value);

  useEffect(() => {
    fetch("/TEST/surveyresults?surveyId=" + value)
      .then((response) => response.json())
      .then((data) => setsurveyRes(data.result));
    console.warn(surveyRes);
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h1>Survey Detail of {myparam}</h1>
        <br />

        <div>
          <h2>Count score 1 : {surveyRes ? surveyRes.CountScore1 : ""}</h2>
          <h2>Count score 2 : {surveyRes ? surveyRes.CountScore2 : ""}</h2>
          <h2>Count score 3 : {surveyRes ? surveyRes.CountScore3 : ""} </h2>
        </div>
      </div>
    </>
  );
};

export default Survey;
