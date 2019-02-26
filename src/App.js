import React, { Component } from 'react';
import './App.scss';
import ProfileHeader from './components/profile-header/profile-header';
import ProfileBody from './components/profile-body/profile-body';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <ProfileHeader />
        </header>
        <main>
          <ProfileBody />
        </main>
      </div>
    );
  }
}

export default App;
