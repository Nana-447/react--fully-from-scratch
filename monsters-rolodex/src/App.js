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
    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='Search monsters' 
          onChange={e => {
            this.setState({ searchField: e.target.value }, () => console.log(this.state)); 
            }}
        />
        <CardList monsters={this.state.monsters}/>
      </div>
    );    
  }
}

export default App;