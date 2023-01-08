import React, { Component } from "react";
import "./App.css";
import Education from "./Components/Education";
import GeneralInfo from "./Components/GeneralInfo";
import Practical from "./Components/Practical";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Resume Builder</legend>
            <GeneralInfo />
            <Education />
            <Practical />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
