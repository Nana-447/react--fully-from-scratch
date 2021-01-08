# REDUX SAGA

## WHAT'S REDUX SAGA
- [API and Docs](https://redux-saga.js.org/);

- It's a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures;

- It makes our flow better organized and productive;

- Component >> Dispatch >> Action >> Middleware: (Thunk = Function) or (Saga = Function that conditionally runs) >> Reducers >> Store; 

- <b>MAIN IDEA OF SAGA:</b> there can be multiple Sagas listening to multiple different actions or the same action, but they only execute when they hear that they are being called;

- SideEffects: some kind of API calls to a backend or some that triggers impure React (when a fuction does not control an external value that the function can only read, it's not setting from scratch);

- <b>Original Application flow (Before Saga):</b>
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/beforeSagaFlow.jpg">

- <b>Modified Application flow (After Saga) / Correction on the image below: Reducers fire first, then Sagas receive the action:</b>
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/afterSagaFlow.jpg">

## Generator Functions
- They also pause the execution when they see a specific key inside the function;
- This key is called "yield";

```
function* gen(){
    console.log('a');
    console.log('b');
}

const g = gen();
```

### Generator Object Created
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

## Saga Middleware
- Runs our Sagas concurrently at the same time;
- <b>Yield:</b> Sagas are implemented as Generator functions that yield objects to the redux-saga middleware. The yielded objects are a kind of instruction to be interpreted by the middleware. When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes;
- <b>Take Every:</b> does not pause our javascript waiting for anything inside before calls a new function;