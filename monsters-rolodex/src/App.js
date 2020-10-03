import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component { // OR I CAN USE React.Component
  constructor(){
    super(); // CALL THE CONSTRUCTOR METHOD ON THE COMPONENT AND GIVES US ACCESS TO THE STATE

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  render () {
    const { monsters, searchField } = this.state; // Just making a copy of the state and keeping the actual one as a base
    
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='Search monsters' 
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );    
  }
}

export default App;