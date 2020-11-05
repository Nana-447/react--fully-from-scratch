# REDUX NOTES

## WHAT'S REDUX
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

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/actionLifeCycle.jpg.jpg" width=800 />