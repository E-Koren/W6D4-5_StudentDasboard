import React from "react";
import "./App.css";
import data from "./components/Data";
import SudentOverview from "./components/SudentOverview";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Eindopdracht</h1>
        <SudentOverview />
      </div>
    );
  }
}

export default App;
