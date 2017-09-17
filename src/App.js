import React, { Component } from 'react';
import logo from './sugar-evil.jpg';
import './App.css';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="titleBar">Sugr Trackr</h2>
        </div>
        <div className="App-intro">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
