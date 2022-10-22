import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.email = "";
    this.tel = "";
    this.button = "Submit";
    this.state = {
      editMode: true,
    };
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick() {
    if (this.state.editMode) {
      this.name = document.getElementById("name").value;
      this.email = document.getElementById("email").value;
      this.tel = document.getElementById("tel").value;
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
        <form id="generalInfo">
          <fieldset>
            <legend>General Information</legend>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={this.name}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={this.email}
              ></input>
            </div>
            <div>
              <label htmlFor="tel">Phone Number:</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                defaultValue={this.tel}
              ></input>
            </div>
            <button onClick={this.HandleClick}>{this.button}</button>
          </fieldset>
        </form>
      );
    } else
      return (
        <div className="General Info">
          <div>
            <h4>{this.name}</h4>
          </div>
          <div>
            <h4> {this.email}</h4>
          </div>
          <div>
            <h4>{this.tel}</h4>
          </div>
          <div>
            <button onClick={this.HandleClick}>{this.button}</button>
          </div>
        </div>
      );
  }
}

export default GeneralInfo;
