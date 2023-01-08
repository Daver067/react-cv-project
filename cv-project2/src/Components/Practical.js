import React, { Component } from "react";

class Practical extends Component {
  constructor(props) {
    super(props);
    this.company = "";
    this.position = "";
    this.tasks = "";
    this.dateStartedSchool = "";
    this.dateEnded = "";
    this.button = "Submit";
    this.state = {
      editMode: true,
    };
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick() {
    if (this.state.editMode) {
      this.company = document.getElementById("company").value;
      this.position = document.getElementById("position").value;
      this.tasks = document.getElementById("tasks").value;
      this.dateStartedSchool =
        document.getElementById("dateStartedSchool").value;
      this.dateEnded = document.getElementById("dateEnded").value;
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
        <form id="PracticalExp">
          <fieldset>
            <legend>Practical Experience</legend>
            <div>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                defaultValue={this.company}
              ></input>
            </div>
            <div>
              <label htmlFor="position">Position:</label>
              <input
                type="text"
                id="position"
                name="position"
                defaultValue={this.position}
              ></input>
            </div>
            <div>
              <label htmlFor="tasks">Main Tasks Performed:</label>
              <input
                type="text"
                id="tasks"
                name="tasks"
                defaultValue={this.tasks}
              ></input>
            </div>
            <div>
              <label htmlFor="dateStartedSchool">
                Date Started At Company:
              </label>
              <input
                type="date"
                id="dateStartedSchool"
                name="dateStartedSchool"
                defaultValue={this.dateStartedSchool}
              ></input>
            </div>
            <div>
              <label htmlFor="dateEnded">Date Ended With Company:</label>
              <input
                type="date"
                id="dateEnded"
                name="dateEnded"
                defaultValue={this.dateEnded}
              ></input>
            </div>
            <button onClick={this.HandleClick}>{this.button}</button>
          </fieldset>
        </form>
      );
    } else
      return (
        <div className="practicalExperience">
          <div>
            <h4>{this.company}</h4>
          </div>
          <div>
            <h4> {this.position}</h4>
          </div>
          <div>
            <h4>{this.tasks}</h4>
          </div>
          <div>
            <h4>{this.dateStartedSchool}</h4>
          </div>
          <div>
            <h4>{this.dateEnded}</h4>
          </div>
          <div>
            <button onClick={this.HandleClick}>{this.button}</button>
          </div>
        </div>
      );
  }
}

export default Practical;
