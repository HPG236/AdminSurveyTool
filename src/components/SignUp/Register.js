import React, { useState } from "react";
import "../SignUp/Register.css";
import { useHistory } from "react-router-dom";
function Index() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  async function signup() {
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: String(username),
        password: String(password),
      }),
    };
    const response = await fetch("/TEST/admindata", requestOptions);
    // const data = await response.json();
    console.warn(response);
    if (response.status == 200) {
      history.push("/signin");
    }
  }

  return (
    <>
      <div class="form-container">
        <h1> Create Account </h1>
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
          <button onClick={signup} class="button">
            Submit{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
