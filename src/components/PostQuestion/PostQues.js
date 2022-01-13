import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Postques() {
  const [ques, setQues] = useState("");
  const history = useHistory();
  let user = JSON.parse(localStorage.getItem("user-info"));
  let username = user.user;

  async function postques() {
    // POST request using fetch with async/await

    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: String(username),
        ques: String(ques),
      }),
    };
    const response = await fetch("/TEST/surveydetails", requestOptions);
    // const data = await response.json();
    console.warn(response);
    history.push("/services");
  }
  return (
    <>
      <div class="form-container">
        <h1> Enter the question for the survey </h1>
        <div class="input-form">
          <input
            type="text"
            class="input-field"
            value={ques}
            onChange={(e) => setQues(e.target.value)}
            autocomplete="off"
            placeholder=" "
          />
          <label for="" class="input-label">
            <span class="label-name">Question</span>
          </label>
        </div>
        <br />
        <br />

        <div>
          <button onClick={postques} class="button">
            Submit{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Postques;
