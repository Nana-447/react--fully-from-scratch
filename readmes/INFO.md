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
