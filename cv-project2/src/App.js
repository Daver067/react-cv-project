import React, { Component } from "react";
import "./App.css";
import Education from "./Components/Education";
import GeneralInfo from "./Components/GeneralInfo";
import Practical from "./Components/Practical";
import EducationFunc from "./FunctionalComponents/EducationFunc";
import GeneralInfoFunc from "./FunctionalComponents/GeneralInfoFunc";
import PracticalFunc from "./FunctionalComponents/PracticalFunc";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>

        <form>
          <fieldset>
            <legend>Resume Builder Class Components</legend>
            <GeneralInfo />
            <Education />
            <Practical />
          </fieldset>
        </form>

        <br></br>
        <br></br>
        <br></br>
        <form>
          <fieldset>
            <legend>Resume Builder Functional Components</legend>
            <GeneralInfoFunc />
            <EducationFunc />
            <PracticalFunc />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
