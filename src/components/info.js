import React, { Component } from "react";

//Info component is the information displayed at the bottom, and it's mainly just text formatted
class Info extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Select a movie to see a recommendation!</h1>
        <p>Disclaimer: Some movies are missing data</p>
      </div>
    );
  }
}

export default Info;
