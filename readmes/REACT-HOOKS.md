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

## USE EFFECT (ALMOST SAME THING OF COMPONENT DID MOUNT WITH ONE MORE THING - CALL IT A LISTENER)
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

## CUSTOM HOOKS
- <b>WHY:</b>;
- <b>WHEN:</b>;

- <b>Transform this</b>:
```
const [post, setPost] = useState(null);
useEffect(() => {
    const fetchUser = async() => {
        const res = await fetch(
            'URL'
        );
        const users = await res.json();
        setUser(users[0]);
    };

    fetchUser();
};
```

- <b>To this</b>:
1. Create a file called: "use-fetch.effect.js";
2. Then write the custom effect:
```
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);

            const dataArray = await res.json();
            setData(dataArray[0]);
        };

        fetchData();
    });
    return data;
};

export default useFetch;
```

3. Bring this custom effect to your component;
```
import useEffect from '..directory/use-fetch.effect';

const componentName = () => {
    // Call it here
    const user = useFetch('URL');

    return (...)
};
```

## USE REDUCER
- It's greater than useState() in some cases;
- We are going to switch the line below to a useReducer implementation;
```
const [user, setUser] = useState(null);
```

- To this:
```
import { useReducer } from 'react';

const INITIAL_STATE = {
    user: null,
    searchQuery: 'Bret'
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'SET_SEARCH_QUERY':
            return {...state, searchQuery: action.payload}
        default:
            return state;
    }
};

const setUser = user => ({
    type: 'SET_USER',
    payload: user
});

const setSearchQuery = queryString => ({
    type: 'SET_SEARCH_QUERY',
    payload: queryString
});

const useReducerExample = () => {
    const [state, dispatch] = userReducer(reducer, INITIAL_STATE);
    const { user, searchQuery } = state;

    ...
    dispatch(setUser(resJson[0]));

    ...
    return (
        <input 
            onChange={event => dispatch(setSearchQuery(event.target.value))}
        />
    )
}
```

## SHOULD YOU ADOPT HOOKS?
- Here are a new addition from React 16.8;
- They let you use state and other React feature without writing a class;
- You can study every new piece of technology that appears on the Marketing;
- But sometimes you don't need to migrate everything to Hooks, because we would delay an application that is already create;
- Why would you migrate a class component that is already this doing good, to hooks? Maybe you will lose a lot of time;
- [Complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/);
- It's not so simple to migrate;
- Very high cost and time. Sometimes employees does not want to pay for it;
- There is no reason to really use Hooks;