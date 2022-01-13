import React from "react";
import Register from "../components/SignUp/Register";
import Navbar from "../components/Navbar";
function Signup() {
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
        <Register> </Register>
      </div>
    </>
  );
}

export default Signup;
