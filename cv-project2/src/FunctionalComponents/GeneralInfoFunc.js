import React, { useState, useEffect } from "react";

function GeneralInfoFunc() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [currentState, setCurrentState] = useState("submit");

  function handleClick(e) {
    e.preventDefault();

    if (currentState === "submit") {
      setName(document.getElementById("name2").value);
      setEmail(document.getElementById("email2").value);
      setTel(document.getElementById("tel2").value);
    }

    currentState === "edit"
      ? setCurrentState("submit")
      : setCurrentState("edit");
  }
  if (currentState === "submit") {
    return (
      <form id="generalInfo">
        <fieldset>
          <legend>General Information</legend>
          <div>
            <label htmlFor="name2">Name:</label>
            <input
              type="text"
              id="name2"
              name="name2"
              defaultValue={name}
            ></input>
          </div>
          <div>
            <label htmlFor="email2">Email:</label>
            <input
              type="email"
              id="email2"
              name="email2"
              defaultValue={email}
            ></input>
          </div>
          <div>
            <label htmlFor="tel2">Phone Number:</label>
            <input type="tel" id="tel2" name="tel2" defaultValue={tel}></input>
          </div>
          <button onClick={handleClick}>{currentState}</button>
        </fieldset>
      </form>
    );
  } else {
    return (
      <div className="General Info">
        <div>
          <h4>{name}</h4>
        </div>
        <div>
          <h4> {email}</h4>
        </div>
        <div>
          <h4>{tel}</h4>
        </div>
        <div>
          <button onClick={handleClick}>{currentState}</button>
        </div>
      </div>
    );
  }
}

export default GeneralInfoFunc;
