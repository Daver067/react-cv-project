import React, { useState, useEffect } from "react";

function EducationFunc() {
  const [highestSchool, sethighestSchool] = useState("");
  const [schoolAttended, setschoolAttended] = useState("");
  const [areaStudy, setareaStudy] = useState("");
  const [dateStarted, setdateStarted] = useState("");
  const [dateGraduated, setdateGraduated] = useState("");
  const [currentState, setcurrentState] = useState("submit");

  function handleClick(e) {
    e.preventDefault();

    if (currentState === "submit") {
      sethighestSchool(document.getElementById("hisethighestSchool2").value);
      setschoolAttended(document.getElementById("schoolAttended2").value);
      setareaStudy(document.getElementById("areaStudy2").value);
      setdateStarted(document.getElementById("dateStarted2").value);
      setdateGraduated(document.getElementById("dateGraduated2").value);
    }

    currentState === "edit"
      ? setcurrentState("submit")
      : setcurrentState("edit");
  }
  if (currentState === "submit") {
    return (
      <form id="educationExp">
        <fieldset>
          <legend>Educational Experience</legend>
          <div>
            <label htmlFor="highestSchool2">
              Highest Level Of Schooling Achieved:
            </label>
            <input
              type="text"
              id="highestSchool2"
              name="highestSchool2"
              defaultValue={highestSchool}
            ></input>
          </div>
          <div>
            <label htmlFor="schoolAttended2">
              Name Of The School Attended:
            </label>
            <input
              type="text"
              id="schoolAttended2"
              name="schoolAttended2"
              defaultValue={schoolAttended}
            ></input>
          </div>
          <div>
            <label htmlFor="areaStudy2">Area Of Study:</label>
            <input
              type="text"
              id="areaStudy2"
              name="areaStudy2"
              defaultValue={areaStudy}
            ></input>
          </div>
          <div>
            <label htmlFor="dateStarted2">Date Program Started:</label>
            <input
              type="date"
              id="dateStarted2"
              name="dateStarted2"
              defaultValue={dateStarted}
            ></input>
          </div>
          <div>
            <label htmlFor="dateGraduated2">Date Graduated:</label>
            <input
              type="date"
              id="dateGraduated2"
              name="dateGraduated2"
              defaultValue={dateGraduated}
            ></input>
          </div>
          <button onClick={handleClick}>{currentState}</button>
        </fieldset>
      </form>
    );
  } else {
    return (
      <div className="educationExperience">
        <div>
          <h4>{highestSchool}</h4>
        </div>
        <div>
          <h4> {schoolAttended}</h4>
        </div>
        <div>
          <h4>{areaStudy}</h4>
        </div>
        <div>
          <h4>{dateStarted}</h4>
        </div>
        <div>
          <h4>{dateGraduated}</h4>
        </div>
        <div>
          <button onClick={handleClick}>{currentState}</button>
        </div>
      </div>
    );
  }
}

export default EducationFunc;
