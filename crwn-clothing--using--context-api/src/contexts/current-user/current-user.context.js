import { createContext } from 'react';

// We set as undefined because we do not know what value is going to come yet
const CurrentUserContext = createContext(undefined);

export default CurrentUserContext;