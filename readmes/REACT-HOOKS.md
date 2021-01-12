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
const [name, setName] = userState();
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