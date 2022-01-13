import React from "react";
import PostQues from "../components/PostQuestion/PostQues";
import Navbar from "../components/Navbar";
const About = () => {
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
        <PostQues> </PostQues>
      </div>
    </>
  );
};

export default About;
