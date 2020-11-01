import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

// App.js converted to a Class Component
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  // Important to close Auth
  unsubscribeFromAuth = null

  componentDidMount(){
    // Method from Firebase that tells the App when the user has some change
    // It works as a subscriber method that keeps listening to its changes    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  // Important to close Auth
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch> {/* Switch matches only one and nothing more after it. Unique router */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;