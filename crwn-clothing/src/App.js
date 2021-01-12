import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // This is crucial for reducers to talk with themselves
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

// App.js converted to a Class Component
class App extends React.Component {
  // Important to close Auth
  unsubscribeFromAuth = null

  // On ComponentDidMount action, we are calling the user action. This user action will set the currentUser using redux
  componentDidMount(){
    //const { setCurrentUser, collectionsArray } = this.props; // To avoid calling this.props every time, we desconstruct the function here

    // ************* BEFORE REDUX SAGA ****************   
    /*
    //Method from Firebase that tells the App when the user has some change
    //It works as a subscriber method that keeps listening to its changes    
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
      //addCollectionAndDocuments(
        //'collections', 
        //collectionsArray.map(({ title, items }) => ({ title, items }))
      //)
    }, error => console.log(error));*/
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
          <Route exact path='/checkout' component={CheckoutPage} />
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

// Reads Data
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

export default connect(
  mapStateToProps
)(App);