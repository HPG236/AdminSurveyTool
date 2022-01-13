import React, { useState, useEffect } from "react";
import "../Survey/Survey.css";
import { useHistory } from "react-router-dom";

function Surveys() {
  let [surveyQues, setsurveyQues] = useState(null);
  let user = JSON.parse(localStorage.getItem("user-info"));
  let username = user.user;
  const history = useHistory();
  function onQueSelect(surveyQue) {
    history.push("/survey", { params: surveyQue.surveyId });
  }

  useEffect(() => {
    fetch("/TEST/surveydetails?username=" + username)
      .then((response) => response.json())
      .then((data) => setsurveyQues(data.result));
    console.warn(surveyQues);
  }, []);

  return (
    <div>
      <h1 id="heading">
        List of all the surveys created by the user {user && user.user}{" "}
      </h1>
      <table id="App">
        <tr>
          <th>Question</th>
          <th>SurveyId</th>
        </tr>
        {surveyQues &&
          surveyQues.map((surveyQue) => (
            <>
              <tr>
                <td>{surveyQue.question}</td>
                <td onClick={() => onQueSelect(surveyQue)}>
                  {surveyQue.surveyId}
                </td>
              </tr>
            </>
          ))}
      </table>
    </div>
  );
}

export default Surveys;
