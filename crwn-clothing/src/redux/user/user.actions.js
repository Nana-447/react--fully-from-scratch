export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER', // Same string declared on our user.reducer.js, ok?
    payload: user
});