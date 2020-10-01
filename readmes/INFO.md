# MY OWN NOTES (for React and Other Things too)

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

### USING ARROW FUNCTIONS:
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