# CONTEXT API

- ContextAPI has the same concept of Redux, but you won't need to import it from React as a library, because it already comes with React;
- Basically, instead of using Redux, we're going to use ContextAPI;
- To run it, just enter the director folder and type: ``yarn start``;
- A context API file can be seen as a "reducer";

## BUILDING A CONTEXT API STRUCTURE
### CONSUMING DATA USING CONTEXT API
1. Create a folder called "context";
2. Create a subfolder and create a new file with ".js" extension;
3. Import the createContext as below:
- ``import { createContext } from 'react';``
4. Then, develop your ContextAPI file;
5. Reading the values of the states. There are 2 ways of doing it:
- First (harder way): consume your contextAPI with the tag ``<CollectionsContext.Consumer>``;
- Second (easier way): using Hook ``import { useContext } from 'react'``;

- <b>[Check this commit to see the whole implementation](https://github.com/jvlessa/React--Zero-To-Mastery/commit/6963ff96c38a368e257d81deaa2891d4eed27622)</b>

### SETTING VALUES INTO CONTEXT API'S
- In this case, we do not have 2 options as reading values, so we need to write some more code;
- We have to leverage our whole component to consome the contextAPI, but it does not matter where you put it, just be sure to give access to the level of the div os elements that you want to read it;
1. Import the contextAPI file that you create to the component;
2. Open the tag: ``<CurrentUserContext.Provider >`` around the components that will use your info;
3. Converte the return of your component to render and its functions;
4. Work to bring the value;
5. Spread the value to the Provider;
6. Check this commit for [details]();