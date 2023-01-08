import React, { useState, useEffect } from "react";

function PracticalFunc() {
  const [company, setcompany] = useState("");
  const [position, setposition] = useState("");
  const [tasks, settasks] = useState("");
  const [dateStartedSchool, setdateStartedSchool] = useState("");
  const [dateEnded, setdateEnded] = useState("");
  const [currentState, setcurrentState] = useState("submit");

  function handleClick() {
    if (currentState === "submit") {
      setcompany(document.getElementById("company2").value);
      setposition(document.getElementById("position2").value);
      settasks(document.getElementById("tasks2").value);
      setdateStartedSchool(document.getElementById("dateStartedSchool2").value);
      setdateEnded(document.getElementById("dateEnded2").value);
    }
    currentState === "edit"
      ? setcurrentState("submit")
      : setcurrentState("edit");
  }
  if (currentState === "submit") {
    return (
      <form id="PracticalExp">
        <fieldset>
          <legend>Practical Experience</legend>
          <div>
            <label htmlFor="company2">Company:</label>
            <input
              type="text"
              id="company2"
              name="company2"
              defaultValue={company}
            ></input>
          </div>
          <div>
            <label htmlFor="position2">Position:</label>
            <input
              type="text"
              id="position2"
              name="position2"
              defaultValue={position}
            ></input>
          </div>
          <div>
            <label htmlFor="tasks2">Main Tasks Performed:</label>
            <input
              type="text"
              id="tasks2"
              name="tasks2"
              defaultValue={tasks}
            ></input>
          </div>
          <div>
            <label htmlFor="dateStartedSchool2">Date Started At Company:</label>
            <input
              type="date"
              id="dateStartedSchool2"
              name="dateStartedSchool2"
              defaultValue={dateStartedSchool}
            ></input>
          </div>
          <div>
            <label htmlFor="dateEnded2">Date Ended With Company:</label>
            <input
              type="date"
              id="dateEnded2"
              name="dateEnded2"
              defaultValue={dateEnded}
            ></input>
          </div>
          <button onClick={handleClick}>{currentState}</button>
        </fieldset>
      </form>
    );
  } else {
    return (
      <div className="practicalExperience">
        <div>
          <h4>{company}</h4>
        </div>
        <div>
          <h4> {position}</h4>
        </div>
        <div>
          <h4>{tasks}</h4>
        </div>
        <div>
          <h4>{dateStartedSchool}</h4>
        </div>
        <div>
          <h4>{dateEnded}</h4>
        </div>
        <div>
          <button onClick={handleClick}>{currentState}</button>
        </div>
      </div>
    );
  }
}

export default PracticalFunc;
