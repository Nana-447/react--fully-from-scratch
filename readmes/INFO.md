# MY OWN NOTES (for React and Other Things too)

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

### PROPS AND PROPS CHILDREN
``export const CardList = (props) => {
    console.log(props);
    return <div>{ props.children }</div>;
}``

### WHEN DO WE BREAK THINGS DOWN INTO COMPONENTS?
- To be a great React developer, you have to know it;
- Are you going to use this piece of layout in another moment of your app?

### STATE VS. PROPS
- State turns into props if you pass to another component as a parameter;
- Where to put my THIS.STATE? It depends: how many components will use this information?

### NEVER RUN SET STATE INSIDE RENDER. THAT WILL COST YOU A LOT OF ERRORS (EVERY TIME YOU CALL SET STATE, YOU RENDER. EVERY TIME YOU RENDER, YOU CALL SET STATE. ETERNAL LOOPING);

### WHEN TO USE STATE CHANGE (STRUCTURING STATE)
- On the higher level that will call the others;
- Never change a state inside a component like a SearchBox for example, that uses a isolated CardList to filter information;
- It depends of how you want to manipulate the context;

### .BIND
- Is a method on any function that returns a new function with the context we pass inside it;

``this.state = {"nome: 'joao'};
this.handleChange = this.handleChange.bind(this);``

### ARROW FUNCTIONS INSTEAD OF .BIND
- Those arrow functions automatically allows you to set the context without calling .bind and a new function;

### EVENT BINDING

``<button onClick={this.handleClick1()}>Click 1<button>
<button onClick={this.handleClick1}>Click 2<button>
<button onClick={this.handleClick2}>Click 3<button>
<button onClick={this.handleClick3}>Click 4<button>``

``handleClick1(){
  console.log('button 1 clicked');
}``

``this.handleClick2 = this.handleClick1.bind(this);``

``handleClick3 = () => console.log('button 3 clicked');``

- Resultados:
- 1: it calls the function right after the page loads, because we're calling it with "()" / expection occurs when we have parameters;
- 2: Method function because it's inside a component. It's okay;
- 3: Calling bind javascript for function. It works, but is not pretty;
- 4: Arrow functions. The best way and incorporates bind inside method function automatically;