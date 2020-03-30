import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Counter from "./app/components/Counter";

export default class App extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-self-center align-items-center  flex-column">
        <div  className="d-flex justify-content-center align-self-center align-items-center  flex-column">
          <h1 style={{ color: "white", fontSize: 70 }}>Waleed &amp; Tooba</h1>
          <h1 style={{ color: "white" }}>Save the date: 7-november-2020</h1>
          <h1 style={{ color: "white" }}>Venue: Somewhere on earth</h1>
        </div>
        <div className="mt-3">
          <Counter targetDate="Nov 07, 2020" targetTime="18:00:00" />
        </div>
        <div className="mt-3">
          <img src={require("./app/assets/couple1")} alt="couple" />
        </div>
      </div>
    );
  }
}
