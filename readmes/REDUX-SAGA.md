# REDUX SAGA

## WHAT'S REDUX SAGA
- [API and Docs](https://redux-saga.js.org/);

- It's a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures;

- It makes our flow better organized and productive;

- Component >> Dispatch >> Action >> Middleware: (Thunk = Function) or (Saga = Function that conditionally runs) >> Reducers >> Store; 

- MAIN IDEA OF SAGA: there can be multiple Sagas listening to multiple different actions or the same action, but they only execute when they hear that they are being called;

- SideEffects: some kind of API calls to a backend or some that triggers impure React (when a fuction does not control an external value that the function can only read, it's not setting from scratch);

- Original Application flow (Before Saga);
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/beforeSagaFlow.jpg">

- Modified Application flow (After Saga) / Correction on the image below: Reducers fire first, then Sagas receive the action:
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/afterSagaFlow.jpg">