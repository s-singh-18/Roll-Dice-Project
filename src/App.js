import React, { Component } from 'react'
import './App.css';
import RollDice from './RollDice';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Roll Dice Project</h1>
        <RollDice />
      </div>
    );
  }
}

export default App;