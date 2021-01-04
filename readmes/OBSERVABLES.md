# OBSERVABLES ASYNC EVENTS

## EXPLANATION
- Some of the companies that you will work may not have those Firebase events: onAuthStateChanged, onSnapshot, etc;

## RxJS
- RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array#extras (map, filter, reduce, every, etc) to allow handling asynchronous events as collections;
- Link [here](https://rxjs-dev.firebaseapp.com/guide/overview);

## OBSERVABLE PATTERN
- STREAM OF EVENTS: BASICALLY ARE EVERYTHINNG JOINNED IN THE CYCLE OF AN EVENT TRIGGERED;
- CYCLES ARE: NEXT, ERROR, COMPLETE;
- SUBSCRIPTION: Way to tell our code that we have a LISTENER;

<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/observablepat1.png" width=1200 />

- FIREBASE STREAM: onAuthStateChanged;
- OUR SUBSCRIPTION NEVER ENDS;