import React, { Component } from "react";
import "./App.scss";
import Profile from "./components/Profile/Profile";
import Toolbar from "./components/Toolbar/Toolbar";

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
          </main>
        </div>
      </div>
    );
  }
}

export default App;
