import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // This is crucial for reducers to talk with themselves
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles'; 

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
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
          </Suspense>
        </ErrorBoundary>
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