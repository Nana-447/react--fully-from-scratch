# REDUX SAGA

## WHAT'S REDUX SAGA
- [API and Docs](https://redux-saga.js.org/);

- It's a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures;

- It makes our flow better organized and productive;

- Component >> Dispatch >> Action >> Middleware: (Thunk = Function) or (Saga = Function that conditionally runs) >> Reducers >> Store; 

## MAIN IDEA OF SAGA
- There can be multiple Sagas listening to multiple different actions or the same action, but they only execute when they hear that they are being called;

- SideEffects: some kind of API calls to a backend or some that triggers impure React (when a fuction does not control an external value that the function can only read, it's not setting from scratch);

## ORIGINAL APPLICATION FLOW (BEFORE SAGA)
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/beforeSagaFlow.jpg">

## MODIFIED APPLICATION FLOW (AFTER SAGA): 
<b>Correction on the image below: Reducers fire first, then Sagas receive the action</b>
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/afterSagaFlow.jpg">

## GENERATOR FUNCTIONS
- They also pause the execution when they see a specific key inside the function;
- This key is called "yield";

```
function* gen(){
    console.log('a');
    console.log('b');
}

const g = gen();
```

## GENERATOR OBJECT CREATED
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/sagaGeneratorFunc.jpg">

- New function:

```
function* gen(i){
    yield i;
    yield i + 10;
    return 25;
}

const gObj = gen(5);
g.next();
```

- Sagas work on this Yield format;

## INSTALLATION
``yarn add redux-saga``

## SAGA MIDDLEWARE 
- [Full explanation here](https://redux-saga.js.org/docs/api/);
- Runs our Sagas concurrently at the same time;
- <b>Yield:</b> Sagas are implemented as Generator functions that yield objects to the redux-saga middleware. The yielded objects are a kind of instruction to be interpreted by the middleware. When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes;
- <b>call:</b> creates an Effect description that instructs the middleware to call the function fn with args as arguments;
- <b>put:</b> Put things back to our Redux Flow / Creates an Effect description that instructs the middleware to schedule the dispatching of an action to the store. This dispatch may not be immediate since other tasks might lie ahead in the saga task queue or still be in progress. / Effect to create actions;
- <b>delay</b>: setTimeout of Saga;
- <b>takeEvery:</b> Spawns a saga on each action dispatched to the Store that matches pattern. / does not pause our javascript waiting for anything inside before calls a new function;
- <b>take</b>: Unlike takeEvery, it waits for the async to happen / Creates an Effect description that instructs the middleware to wait for a specified action on the Store. The Generator is suspended until an action that matches pattern is dispatche. We do not have to pass a second argument calling a new function;
- <b>takeLatest</b>: Forks a saga on each action dispatched to the Store that matches pattern. And automatically cancels any previous saga task started previously if it's still running;
- <b>all</b>: Takes an array of Sagas and executes them at the same time;

## ROOT SAGA
- We created a file on this [commit]() that handles all saga requests;
- If we would not have created it, we would have to call sagaMiddleware.run all the time for each command;

## GOOGLE SIGN IN FROM FIREBASE USING SAGA
- Refactor [here]();