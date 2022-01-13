import React from "react";
import Login from "../components/SignIn/Login";
import Navbar from "../components/Navbar";
const signin = () => {
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
        <Login> </Login>
      </div>
    </>
  );
};

export default signin;
