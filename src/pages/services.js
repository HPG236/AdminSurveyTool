import React from "react";
import Surveys from "../components/Survey/Surveys";
import Navbar from "../components/Navbar";
function services() {
  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Surveys> </Surveys>
      </div>
    </>
  );
}

export default services;
