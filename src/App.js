import React, { Component } from 'react';
import './App.scss';
import ProfileHeader from './components/profile-header/profile-header';

class App extends Component {
  render() {
    return (
      <main className="container">
        <ProfileHeader />
      </main>
    );
  }
}

export default App;
