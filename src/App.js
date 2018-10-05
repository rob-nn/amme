import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto'
import MainAppBarr from './MainAppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainAppBarr />
      </div>
    );
  }
}

export default App;
