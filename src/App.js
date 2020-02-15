import React, { Component } from "react";
import "./App.scss";
import About from "./screen/About/About";
import Profile from "./screen/Profile/Profile";
import Skill from "./screen/Skill/Skill";
import Toolbar from "./screen/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Toolbar />
        </header>
        <div className="container">
          <main>
            <Profile />
            <About />
            <Skill />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
