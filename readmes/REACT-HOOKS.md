# REACT HOOKS
- Released is a big feature introduced in February 2019, on React 16.8 version;
- <b>Hooks is a way for us to write FUNCTIONAL components, but gain access the new funcionalities if that in the past we just had when we used CLASS components</b>;
- It replaces the way we write certain components;
- The community is very devided of using or not Hooks;
- React Hooks [Docs](https://reactjs.org/docs/hooks-intro.html);
- Basically on our Class components, we use the functions to change our state;
- <b>We cannot use Hooks inside a class components</b>;
- <b>We can only use Hooks inside of a functional component</b>;
- </b>We can only use it on React 16.8 or higher</b>;
- The community is saying that Hooks is here to stay;

## ARRAY DESTRUCTURING
- Respect the index positions of the values:
```
const arr = [1, 2, 3]
const [a, b, c] = arr

a = 1
b = 2
c = 3
```
## USE STATE
``import { useState } from 'react'``

- It allows our functional to have access to internal state features that we just could have using CLASS components;
- It gives us back an array of two values (destructured);

- What we pass inside "useState(HERE)" will be our value of setState:

```
const [name, setName] = useState();
```

- Then we call the function:

```
<button onClick={() => setName('Andrei')}>Set Name Button to Andrei</button>
```

- The command below is equivalent to this:

```
this.state = {
    name: 'Yihua'
};

<button onClick={() => this.setState({name: 'Andrei'})}>Set Name Button to Andrei</button>
```

- The only main difference is that now we have a functional component that has this function;

## USE EFFECT (ALMOST SAME THING OF COMPONENT DID MOUNT WITH ONE MORE THING)
``import { useEffect } from 'react'``

- Use effect does not get back any value;
- Instead it gets back a function that is called whenever the component changes or rerenders;
- <b>Whenever a parameters is called via useState, it updates the application and gets into the function</b>;
- <b>Simulates the "componentDidMount" but also when we change any value</b>;

- <b>Using Effect</b>;
```
useEffect(() => {
    debugger
});
```

- <b>The second parameter is optional, it's an array and we have to pass values ONLY THAT WE WANT to rerender / watch</b>;
- It will only fires when "searchQuery" changes (in this case, for example);
```
useEffect(() => {
   debugger 
}, [searchQuery]);
```

- <b>USING FETCH (ASYNC AWAIT)</b>
- <b>BE CAREFUL OF GETTING ETERNAL LOOPING ((TO AVOID THIS, WE PASS OUR EMPTY ARRAY AT THE END OF THE USEEFFECT()))</b>
```
const [user, setUser] = useState(null);
const [searchQuery, setSearchQuery] = useState(null);

useEffect(() => {
    // A function that will be called on componentDidMount
    const fetchFunction = async () => {
        const response = await fetch('URL');
        const resJosn = await response.json();
        // Calling the useState and changing its value
        // This will be a infinite looping if we do not take care of this
        setUser(resJson[0]);
    }

    //Just calling the async function that we just created above
    fetchFunc();
}, [searchQuery]); // If we forget this empty array (or a condition), it will be calling the function forever and our app will crash
```

- <b>WE CANNOT CALL AN "useEffect" inside of a condition. The condition has to be INSIDE the "useEffect"!</b>

### USE EFFECT (FOR COMPONENT WILL UNMOUNT)
```
useEffect(() => {

    // Component Will Unmount HERE
    return () => {
        debugger
    }
});
```

### USE EFFECT CHEAT SHEET
- ComponentDidMount:
```
//Class
componentDidMount() {
    console.log('I just mounted!');
}
 
//Hooks
useEffect(() => {
    console.log('I just mounted!');
}, [])
```

- ComponentWillUnmount:
```
//Class
componentWillUnmount() {
    console.log('I am unmounting');
}
 
//Hooks
useEffect(() => {
    return () => console.log('I am unmounting');
}, [])
```

- ComponentWillReceiveProps:
```
//Class
componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
        console.log('count changed', nextProps.count);
    }
}
 
//Hooks
useEffect(() => {
    console.log('count changed', props.count);
}, [props.count])
```