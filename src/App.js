import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container center">
            <Menu />
          </div>
          <div class="topic-list">
            <Home />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
