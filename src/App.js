import React, { Component } from "react";
import "./App.scss";
import About from "./screen/About/About";
import Experience from "./screen/Experience/Experience";
import Profile from "./screen/Profile/Profile";
import Skill from "./screen/Skill/Skill";
import Toolbar from "./screen/Toolbar/Toolbar";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <CSSTransition in appear timeout={500} classNames="app">
        {() => (
          <div className="app">
            <header>
              <Toolbar />
            </header>
            <main className="container">
              <Profile />
              <About />
              <Skill />
              <Experience />
            </main>
          </div>
        )}
      </CSSTransition>
    );
  }
}

export default App;
