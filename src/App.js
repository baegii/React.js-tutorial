import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyName /*name="리액트"*/ />
      </div>
    )
  }
}

export default App;
