# REACT HISTORY

## Why React was created?
- Back in the days, websites were made using:
  - 1 HTML page;
	- 1 JavaScript File;
	- 1 CSS Sheet;
- More JavaScript, Less HTML;
- 2010: Angular was the standard;
- React uses MVC pattern;
- Complexity was increasing, because each part of the page was getting more functions;
- Facebook could not handle anymore their apps. In 2013, they released React on the JS Conf;
- New way to build frontend applications:
- Angular decided to rewrite the library;
- People went to React and changed it;
- Most job demand across demand;

## Reasons that React is so good?
- Do not touch HTML, let React do that for you;

- Imperative Development: 
  - Directly Change Individual Parts Of Your App, Using Events;
  - Hard To Communicate Between Specific Parts Of The Applications That Used The Same Behavior;
	- React Came Out With Declarative Approach;
	
- Declarative Development:
	- Makes The Entire Application Works Based In Events. How You Want You Application To Look Like?
	- Instead Of Saying One By One Component How It Would Be Look Like, We Can Use State To Describe How Our Application Would Look Like;

- React Concept = "Based On Whatever State Is, I'm Just Going To React And Change Everything For You";

## React architecture
- Lego Blocks!
- Everything We Build In React It's Based In Components;
    - We Can Create Components For Everything;
	- We Can Build An Entire Component And Reuse It Into Our Page;
	- Componentes Receives The Props And Builds The Html;
	- Based On The State, The Entire Component Can Be Used On The Page, Reused, Etc;
    - I Can Use Components From Other People;

## Unique direction dataflow
- Jsx = Html Inside Of Javascript Combined
- Virtual Dom = Javascript Version Of The Dom
- Unique Direction = Using State
- Easier To Debugger Because I Can Just Check What State Is Being Affected;

- With The React Robots And Its Concept, Now You Can Code Using The Virtual Dom, For:
	- React Core Robot!
	    - React Dom (Web Browser);
		- Android And Ios (React Native);
		- Vr (React 360);
		- Electron And React Desktop;
        - React To Blessed (Terminal);
	
## What is a State?
- In simple terms, state is simply an object that contains all your key-value pairs. State determines how your components render and behave;
- State allows your components to be dynamic and interactive;
- State is not to be confused with props. State is what is managed within the component, whereas props is what gets passed to the component;

## React keywords
- Declarative = React Is A Tecnology Because We Tell It A State
- State = Has A Component (Giant Javascript Object)
- Component = Is Built With Jsx And Has Props
- Creates A Virtual Dom To Update The Dom

## What a great React developer has to know?
1. Decide On Components;
    - What Is A Component?
	- Break Down The App In Different Components;
	
2. Decide The State And Where It Lives;
	- State Can Live In Different Locations Or Multiple Locations;

3. What Changes When State Changes;
    - What State Changes? What Part Of The Virtual Dom?

## Virtual DOM vs. DOM

### DOM
- Document Object Model and is an abstraction of a structured text. For web developers, this text is an HTML code, and the DOM is simply called HTML DOM. Elements of HTML become nodes in the DOM;

### Virtual DOM
- Virtual DOM was not invented by React, but React uses it and provides it for free.
Perhaps it’s better to think of the virtual DOM as React’s local and simplified copy of the HTML DOM. It allows React to do its computations within this abstract world and skip the “real” DOM operations, often slow and browser-specific.

- There’s no big difference between the “regular” DOM and the virtual DOM. This is why the JSX parts of the React code can look almost like pure HTML;

## Life Cycle Methods
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reactlifecyclemethods.png" width=650 />

## Classes vs. Hooks
https://reactjs.org/docs/hooks-effect.html
