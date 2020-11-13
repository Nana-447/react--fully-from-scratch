# REDUX NOTES

## WHAT'S REDUX
- [Redux official website](https://redux.js.org/)
- Redux is basically a library to help React to manage state;
- Redux allows react state to be more scalable;
- Good for managing large state;
- Useful for sharing data between components. 
- When we use normal React, we do have to move the state up 1 layer, so the parent layer can share the state. Not with Redux;
- Framework inspired by databases architectures;
- Redux uses Flux Pattern: Action, Dispatcher, Store, View;
- Basically REDUX == this.state;
- We can still use React State and Redux State together;

## FLUX PATTERN VS. MVC PATTERN;
- Created by Facebook to be an MVC Pattern, but focused on a Unique Direction Dataflow;
- MVC is good on controlling backend, but talking about frontend, it makes a lot of mess when controls all the elements of a page or app;
- Before that Flux Pattern, we always had a MVC Pattern: an Action had a Controller that changed different pieces of the View;
- Craziness way of controling everything at the same time;

## 3 PRINCIPLES

1. Single source of truth or else: 1 big massive state;

2. State is ready only: state is never modified, but a new one is created every time a state changes;

3. Changes are made only using pure functions;

## WHAT'S THE PROBLEM WITH STATE
- We usually have lots of components or pages with lots of different states;
- In a period of time, the states might be confusing if they get too mixed, as the image below:

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reactState.jpg" width=800 />

## WHAT'S REDUX SOLUTION
- 1 Single State;
- Props on the components;

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reduxState.jpg" width=800 />

- Redux has only 1 massive object that describes the entire app;

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reduxState2.jpg" width=800 />

## REDUX FLOW

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reduxFlow.jpg" width=800 />

1. Action: when a user does something: click or drop;

2. Root Reducer: simple a pure function that receives an input and creates an ouput. The Output is the "State" or the "Store";

3. Store: is the output. The entire state of the app;

4. DOM Changes: React makes changes to the view layer;

### But why don't we use only "Actions" and "DOM Changes"?

- Because it would be a mess, like jQuery doing lots of actions with taking care of lots of behaviors at the same time;


## AVOIDING DRILLING STATES THROUGH COMPONENTS

- Sometimes, we have to use states on children components that comes from parent components;
- Sometimes, we have 3+ or more components that don't even use this.state passed;
- We need share the value, not replicating the same state for each different value;
- STATE = SINGLE RESOURCE OF TRUTH;

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reduxFlow2.jpg" width=1200 />

- Reducer basically is used to control everything of a state;
- Root reducer controls all reducers;

## REDUCERS
- We can split them, as the image:
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reactReducers.jpg" width=800 />

- Reducers are functions: that has a state and an action;

```
const userReducer = (currentState, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...currentState,
                currentState: action.payload
            };
        default:
            return currentState;
    }

}; // => { currentUser: { ... } }
```

## ACTION LIFECYCLE

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/actionLifeCycle.jpg" width=800 />

## MIDDLEWARE

- Located between "Action" and "Root Reducer";
- Piece of code that gets the action before the reducer;
- In this project, we're using "Redux Logger Middleware";

## INSTALLING REDUX

* <b>Step 1:</b> Install the 3 main libraries:
`` yarn add redux redux-logger react-redux ``

* <b>Step 2:</b> Import { Provider } on the index.js and wrap the whole code:

```
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
  ........
  </Provider>,
  document.getElementById('root')
);
```
* <b>Step 3:</b> Create the folder "redux" inside your app folders
* <b>Step 4:</b> Create your reducers;
* <b>Step 5:</b> Link them all;
    * <b>Steps [2, 3, 4, 5] can be found on these commits:</b>
    * [Commit 1](https://github.com/jvlessa/React--Zero-To-Mastery/commit/6feef60f9e4e9caed0fc2c2297176faf0175391b)
    * [Commit 2](https://github.com/jvlessa/React--Zero-To-Mastery/commit/60e0b4e3122987f128c206a7876f9e129cfd8910)

* <b>Step 6:</b> Create the app "store.js" to use the MiddleWare. [Commit here](https://github.com/jvlessa/React--Zero-To-Mastery/commit/c2e791490e7a8c07198adc22e8f1aad9175acac2);

* <b>Step 7:</b> Create the "actions.js" for the reducers. [Commit here](https://github.com/jvlessa/React--Zero-To-Mastery/commit/851fa34dc1d5432a4bf7ff6454b43fed0d5a8a81)

* <b>Step 8:</b> Connect the components and its values using "connect()" and "mapStateToProps". [See commit](https://github.com/jvlessa/React--Zero-To-Mastery/commit/c3d51ef5c8734e24b9f6380cdbd11cab02c7ceb2)

* <b>Step 9:</b> This part is kinda hard to understand, but let's try to simply explain: 
    * It's required that the "connect" from redux must be imported: `` export default connect(null, mapDispatchToProps)(App) ``;
    * The "action.js" file does not need to be linked directly with the reducer. It can have any name;
    * We need to use "mapmapDispatchToProps" to set a new value using the action throught the connect;
    * The only requirement that an "action.js" file needs to have, it's the type. For example: `` type: 'SET_CURRENT_USER' ``;
    * The reducer must have this type to recognize the action;
    * [Check the commit calling a header component, and using mapmapDispatchToProps, here](https://github.com/jvlessa/React--Zero-To-Mastery/commit/1c415739de7fdbca1647e1524fd6064c06f408c0);

    * <b>"mapStateToProps":</br> It connects redux state to props of react component;
    * <b>"mapDispatchToProps":</br> It connects redux actions to react props and changes values;

* <b>Step 10:</b> Use a file to declared constant values for the actions types. [See commit here](https://github.com/jvlessa/React--Zero-To-Mastery/commit/7fff51f5f80fdc52f42a219dad27c447339d2051);

## SELECTORS IN REDUX
- Selector is getting an state and pour a little piece of it, manipulating it;