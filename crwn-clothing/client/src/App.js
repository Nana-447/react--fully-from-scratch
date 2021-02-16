import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // This is crucial for reducers to talk with themselves
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles'; 

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// Functional Component
const App = ({ checkUserSession, currentUser }) => {
  // Replaced the componentDidMount here
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); // checkUserSession is a property function that is passed from mapStateToProps

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch> {/* Switch matches only one and nothing more after it. Unique router */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact 
          path='/signin' 
          render={() => 
            currentUser ? 
            (
              <Redirect to='/' />
            ) : 
            (
              <SignInAndSignUpPage />
            )
          } 
        />
      </Switch>
    </div>
  );
}

// Reads Data
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);