import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);
  return (
    <>
      <Navbar> </Navbar>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "15%",
        }}
      >
        <h1> Hello, {user && user.user} </h1>
        <br></br>
        <br></br>
        <p>
          You can create surveys, see all the surveys created and score related
          to them
        </p>
      </div>
    </>
  );
};

export default Home;
