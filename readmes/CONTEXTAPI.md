# CONTEXT API

- ContextAPI has the same concept of Redux, but you won't need to import it from React as a library, because it already comes with React;
- Basically, instead of using Redux, we're going to use ContextAPI;
- To run it, just enter the director folder and type: ``yarn start``;
- A context API file can be seen as a "reducer";

## BUILDING A CONTEXT API STRUCTURE
1. Create a folder called "context";
2. Create a subfolder and create a new file with ".js" extension;
3. Import the createContext as below:
- ``import { createContext } from 'react';``
4. Then, develop your ContextAPI file;
5. Reading the values of the states. There are 2 ways of doing it:
- First (harder way): consume your contextAPI with the tag ``<CollectionsContext.Consumer>``;
- Second (easier way): using Hook ``import { useContext } from 'react'``;

- <b>[Check this commit to see the whole implementation]()</b>