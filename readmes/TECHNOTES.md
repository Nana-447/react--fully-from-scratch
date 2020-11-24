# MY TECHNICAL NOTES / TIPS

## THIS = JavaScript Content

## NPM VS. YARN commands
- Install dependencies from package.json: npm install == yarn;
- Install a package and add to package.json: npm install package --save == yarn add package
- Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev
- Remove a dependency from package.json: npm uninstall package --save == yarn remove package
- Upgrade a package to its latest version: npm update --save == yarn upgrade
- Install a package globally: npm install package -g == yarn global add package

## BABEL
- Basically it will take all of our JavaScript files and create a pack of all the code understandable to the browser;
- Babel makes sure the files will work in any browser and any version;

## WEBPACK
- Module blunder to take all the JavaScript, put everything together and make it ready to build the code;

## SET STATE
- Always use "this.setState" to change a state value;
- Never use "this.state.variable = "test";
- The "setState" triggers and renders a new component automatically;

## WHAT IS A REACT COMPONENT?
- A function that renders a State;

## WAYS OF CREATING COMPONENTS IN REACT
### USING CLASSES:
- Has access to the State;
- Has access to the lifeCycle methods;
- Not only receive props, but manipulates things;

``class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }
  render () {
    return (
        <input 
            className="search-box"
            type="search"
        />
    );    
  }
}``

### USING ARROW FUNCTIONAL:
- Unlike Class Components, they don't have access to the STATE;
- Do not have access to the lifeCycle methods;
- Used just to get some props and return HTML;
- Smaller and easier to read than Class Components;

``export const SearchBox = props => (
    <input 
        className="search-box"
        type="search"
    />
);``

## PROPS AND PROPS CHILDREN
``export const CardList = (props) => {
    console.log(props);
    return <div>{ props.children }</div>;
}``

## WHEN DO WE BREAK THINGS DOWN INTO COMPONENTS?
- To be a great React developer, you have to know it;
- Are you going to use this piece of layout in another moment of your app?

## STATE VS. PROPS
- State turns into props if you pass to another component as a parameter;
- Where to put my THIS.STATE? It depends: how many components will use this information?

## NEVER RUN SET STATE INSIDE RENDER. 
- THAT WILL COST YOU A LOT OF ERRORS (EVERY TIME YOU CALL SET STATE, YOU RENDER. EVERY TIME YOU RENDER, YOU CALL SET STATE. ETERNAL LOOPING);

## WHEN TO USE STATE CHANGE (STRUCTURING STATE)
- On the higher level that will call the others;
- Never change a state inside a component like a SearchBox for example, that uses a isolated CardList to filter information;
- It depends of how you want to manipulate the context;

## .BIND
- Is a method on any function that returns a new function with the context we pass inside it;

``this.state = {"nome: 'joao'};
this.handleChange = this.handleChange.bind(this);``

## ARROW FUNCTIONS INSTEAD OF .BIND
- Those arrow functions automatically allows you to set the context without calling .bind and a new function;

## EVENT BINDING

``<button onClick={this.handleClick1()}>Click 1<button>
<button onClick={this.handleClick1}>Click 2<button>
<button onClick={this.handleClick2}>Click 3<button>
<button onClick={this.handleClick3}>Click 4<button>``

``handleClick1(){
  console.log('button 1 clicked');
}``

``this.handleClick2 = this.handleClick1.bind(this);``

``handleClick3 = () => console.log('button 3 clicked');``

- Results:
- 1: it calls the function right after the page loads, because we're calling it with "()" / expection occurs when we have parameters;
- 2: Method function because it's inside a component. It's okay;
- 3: Calling bind javascript for function. It works, but is not pretty;
- 4: Arrow functions. The best way and incorporates bind inside method function automatically;

## REACT AND REACT DOM
- Check out the project [Pure React](https://github.com/jvlessa/React--Zero-To-Mastery/tree/master/pure-react) to understand how it works;

## KEEPING MY PACKAGES UP TO DATE (YARN)
- Add the "^" before the version of each library on your "package.json" to get always the latest version of your lib;
- Run ``yarn upgrade``;
- Run ``yarn install``;

## KEEPING MY PACKAGES UP TO DATE (NPM)
- Run ``npm update`` - Better run this command;
- Run ``npm install`` - Sometimes will skip some versions that it thinks it has to be skipped;

## RENDER CHROME DEBUGGER
- F12;
- 3 DOTS;
- MORE TOOLS;
- RENDERING;
- PAINT FLASHING;

## SUPER
- Basically shares the props that the component receives
- It extends the whole class and its props;

## ASYNC SETSTATE
- I do have to pass a function instead of an object and call prevState and prevPros
``this.state((prevState, prevPros) => {``
``   return {meaningOfLife: this.state.meaningOfLife + 1}``
``},``
``   () => console.log(this.state.meaningOfLife)``
``)``

## PROPS INSIDE CONSTRUCTOR AND SUPER
- It allows you to use props passed to the component inside the constructor and not only inside the functions;
- ``constructor(props)``
- ``super(props)``

## LIFECYCLES FOR CLASS COMPONENTS
- constructor() = "Start"
- super() is used inside the constructor to use the lifecycles and extend props and functions;

- render();
- componentDidMount() = "OnOpen" API calls basically comes here
- componentDidUpdate(); = "OnLoad" - usually triggered everytime the component is rerendered (setState);
- shouldComponentUpdate(nextProps, nextState) = Based on the new props or newState, we can trigger or not the rerender. If return true, our component will update. If return false, it will not update; 
- componentWillUnmount(); = "OnClose"

## ROUTING IN REACT ##
- React is not a framework that comes with a routing pre-built like Angular;
- React lets you use any kind of routing you want;
- The most used one is [React Router](https://reactrouter.com/);

- COMPONENTS IN REACT ALWAYS RENDERS 3 PROPS: history, location, match;
- EXACT DISABLED: if we do not use it, it will render all components that has "/" for example;
- EXACT ENABLED: if we use it, it will render only the component that has "/" and that's it;
- PATH: '/page/:parameterId' - the parameter can be dinamically rendered;
- To acess the parameter dinamically called, can be accessed through: "props.match.params.parameterId";

- Navigating using Router Dom:
- ``import {Link} from 'react-router-dom'``;
- ``<Link to='/topics'> Topics </Link>``;
- Or we can use:
- ``<button onClick={() => props.history.push('/topics')}>Topics</button>`;
- Using Location the make dinamically URL's:
- ``<Link to={`${props.match.url}/21`}> Topics </Link>``;

## WITH ROUTER (REACT-ROUTER-DOM)
- Superpower the components with the routes on a higher lever;

## JAVASCRIPT EQUALS
- == : compares the values converting, ignoring their types, (for example: "1" == 1 is true);
- ===: compares the values matching their types too, (for example: "1" === 1 is false);

## FALSE EQUIVALENTS IN JAVASCRIPT (==)
- 0
- false
- undefined
- null
- NaN
- ""

## CURRYING
- Basically it works as isolation of functions;
- Example:
- ``const multiply = (a, b) => a*b;``
- ``const curriedMultiply = (a) => (b) => a*b;``
- ``const curriedMultiplyBy5 = curriedMultiply(5);``

- Using curriedMultiplyBy5:
- ``curriedMultiplyBy5(5)`` = 25;
- ``curriedMultiplyBy5(4)`` = 20;
- ``curriedMultiplyBy5(7)`` = 35;

## HASH TABLES VS. ARRAY
- Acess [this link to know more about this improvment of data structure](https://www.kirupa.com/html5/hashtables_vs_arrays.htm);