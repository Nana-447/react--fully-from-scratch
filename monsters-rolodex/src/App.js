import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component { // OR I CAN USE React.Component
  constructor(){
    super(); // CALL THE CONSTRUCTOR METHOD ON THE COMPONENT AND GIVES US ACCESS TO THE STATE

    this.state = {
      monsters: []
    };
  }

  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  render () {
    return (
      <div className="App">
        <CardList name="Joao">
          {this.state.monsters.map(monster => (
              <h1 key={monster.id}> {monster.name} </h1>
          ))}    
        </CardList>           
      </div>
    );    
  }
}

export default App;