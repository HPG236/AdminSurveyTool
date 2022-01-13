import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  async function signin() {
    // POST request using fetch with async/await

    const requestOptions = {
      method: "GET",

      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      "/TEST/admindata?" + "username=" + username + "&password=" + password,
      requestOptions
    );
    // const data = await response.json();
    console.warn(response);
    const user = {
      user: username,
      password: password,
    };
    console.warn(user);
    localStorage.setItem("user-info", JSON.stringify(user));
    if (response.status == 200) {
      history.push("/");
    }
  }
  return (
    <>
      <div class="form-container">
        <h1> Welcome back, please enter your details </h1>
        <div class="input-form">
          <input
            type="text"
            class="input-field"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            autocomplete="off"
            placeholder=" "
          />
          <label for="" class="input-label">
            <span class="label-name">UserName</span>
          </label>
        </div>
        <br />
        <br />
        <div class="input-form">
          <input
            type="password"
            class="input-field"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            autocomplete="off"
            placeholder=" "
          />
          <label for="" class="input-label">
            <span class="label-name">Password</span>
          </label>
        </div>
        <br /> <br />
        <div>
          <button class="button" onClick={signin}>
            Submit{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
