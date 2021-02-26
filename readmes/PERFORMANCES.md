# PERFORMANCE NOTES
- React Lazy to load components dinamically;
- React Suspense was created to use when you need async components;
- React Suspense + React Lazy will create different chunks on the page;
- The components that are not loaded as a page, does not have to be load as a lazy component, but they are not that large;

## REACT MEMO
- It's a way for react memorize the component and avoid rerenders it every time;
- Example of memo: adding items to your cart, meaning that the array will rerender only if we need it;

## USE CALLBACK
- To wait a return of some action in react: useCallback(() => console.log('Joao'), []);

## USE MEMO
- Is a React hook that memorizes the output of a function. That is it;

## REACT PROFILE
- Only available after React 16.10;