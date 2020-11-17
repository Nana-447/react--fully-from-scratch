import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], // First arguments is always an array
    (user) => user.currentUser
)