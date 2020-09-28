import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super(); // CALL THE CONSTRUCTOR METHOD ON THE COMPONENT AND GIVES US ACCESS TO THE STATE

    this.state = {
      string: 'Hello Joao'
    };
  }
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ this.state.string }</p>
          <button onClick = {() => this.setState({ string: "Hello Testing" })}>Change Text</button>
        </header>
      </div>
    );    
  }
}

export default App;