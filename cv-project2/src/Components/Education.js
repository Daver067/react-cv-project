import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.highestSchool = "";
    this.schoolAttended = "";
    this.areaStudy = "";
    this.dateStarted = "";
    this.dateGraduated = "";
    this.button = "Submit";
    this.state = {
      editMode: true,
    };
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick() {
    if (this.state.editMode) {
      this.highestSchool = document.getElementById("highestSchool").value;
      this.schoolAttended = document.getElementById("schoolAttended").value;
      this.areaStudy = document.getElementById("areaStudy").value;
      this.dateGraduated = document.getElementById("dateGraduated").value;
      this.dateStarted = document.getElementById("dateStarted").value;
    }
    this.button === "Submit"
      ? (this.button = "Edit")
      : (this.button = "Submit");
    this.setState({
      editMode: !this.state.editMode,
    });
  }
  render() {
    if (this.state.editMode) {
      return (
        <form id="educationExp">
          <fieldset>
            <legend>Educational Experience</legend>
            <div>
              <label htmlFor="highestSchool">
                Highest Level Of Schooling Achieved:
              </label>
              <input
                type="text"
                id="highestSchool"
                name="highestSchool"
                defaultValue={this.highestSchool}
              ></input>
            </div>
            <div>
              <label htmlFor="schoolAttended">
                Name Of The School Attended:
              </label>
              <input
                type="text"
                id="schoolAttended"
                name="schoolAttended"
                defaultValue={this.schoolAttended}
              ></input>
            </div>
            <div>
              <label htmlFor="areaStudy">Area Of Study:</label>
              <input
                type="text"
                id="areaStudy"
                name="areaStudy"
                defaultValue={this.areaStudy}
              ></input>
            </div>
            <div>
              <label htmlFor="dateStarted">Date Program Started:</label>
              <input
                type="date"
                id="dateStarted"
                name="dateStarted"
                defaultValue={this.dateStarted}
              ></input>
            </div>
            <div>
              <label htmlFor="dateGraduated">Date Graduated:</label>
              <input
                type="date"
                id="dateGraduated"
                name="dateGraduated"
                defaultValue={this.dateGraduated}
              ></input>
            </div>
            <button onClick={this.HandleClick}>{this.button}</button>
          </fieldset>
        </form>
      );
    } else
      return (
        <div className="educationExperience">
          <div>
            <h4>{this.highestSchool}</h4>
          </div>
          <div>
            <h4> {this.schoolAttended}</h4>
          </div>
          <div>
            <h4>{this.areaStudy}</h4>
          </div>
          <div>
            <h4>{this.dateStarted}</h4>
          </div>
          <div>
            <h4>{this.dateGraduated}</h4>
          </div>
          <div>
            <button onClick={this.HandleClick}>{this.button}</button>
          </div>
        </div>
      );
  }
}

export default Education;
