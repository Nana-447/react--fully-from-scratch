import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // This is crucial for reducers to talk with themselves
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'; // Actions does not need to be linked with the reducer
import { selectCurrentUser } from './redux/user/user.selector';

// App.js converted to a Class Component
class App extends React.Component {
  // Important to close Auth
  unsubscribeFromAuth = null

  // On ComponentDidMount action, we are calling the user action. This user action will set the currentUser using redux
  componentDidMount(){
    const { setCurrentUser } = this.props; // To avoid calling this.props every time, we desconstruct the function here

    // Method from Firebase that tells the App when the user has some change
    // It works as a subscriber method that keeps listening to its changes    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          // Calling action
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      // Calling action
      setCurrentUser(userAuth);
    });
  }

  // Important to close Auth
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch> {/* Switch matches only one and nothing more after it. Unique router */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToPros = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // Connecting with the action
});

export default connect(
  mapStateToPros, 
  mapDispatchToProps
)(App);