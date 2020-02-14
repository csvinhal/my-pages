import React, { Component } from "react";
import "./App.scss";
import About from "./screen/About/About";
import Profile from "./screen/Profile/Profile";
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
          </main>
        </div>
      </div>
    );
  }
}

export default App;
