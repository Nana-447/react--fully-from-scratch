# STYLED COMPONENTS

## CSS IN JS???
- Current way of adding CSS, it's importing CSS from our files;
- CSS HAS A SERIOUS PROBLEM: it shares ONE SINGLE GLOBAL NAMESPACE;
- For example: if I create a new component, with the same name, my app might use the CSS classes from the old one, even if it's imported from a different component;
- JavaScript usually gets the CSS imported and puts on our HEADER CSS;
- We can use some methodology, as BEM CSS: http://getbem.com/;
- But BEM CSS is mentally stressing;
- React has a way that makes the JS creates styles for us;

## REACT WAY TO STYLE COMPONENTS (BASICALLY WHAT REACT DOES FOR DEFAULT)
- Example of doing it:
```const textStyles = {
    color: 'red',
    fontSize: 14px
}

<div style={textStyles}>I am a DIV component</div>
```
## ISSUES OF DOING ON THE REACT DEFAULT WAY
- But we have some issues doing it: we do not have access to ALL CSS SELECTORS;
- By using JS and CSS together, we can encapsulate our CSS styles and not making things globally mixed;

## SOLUTION: STYLED COMPONENTS FOR REACT JS [USING THE LIBRARY: STYLED COMPONENT]
1. Add the library to the project:
``yarn add styled-components``

2. Import it to the app:
``import styled from 'styled-components';``

3. Generate the component:
```
const Text = styled.div`
    color: red;
    font-size: 28px;
`;
```

4. Call the component inside the app
``<Text>I am a DIV Styled Component</Text>``

5. Take a look and see that the React renders a unique class for this component, so it won't mess up across the application;

6. Now JavaScript is true isolating CSS on the application;

7. Forget about the SASS;

8. We can also share and re use our Styled Component;

9. We can use JavaScript to control our styles easily (isActive as parameter);
```
<Text isActive={true}>I am a DIV Styled Component</Text>

const Text = styled.div`
    color: red;
    font-size: 28px;
    border: ${({isActive}) => isActive ? '1px solid black' : '3px dotted green'}
`;
```

## USING ANOTHER KIND OF COMPONENT DELIVERY FROM A EXTERNAL LIBRARY OR A REACT LIBRARY (LINK FOR EXAMPLE)

```
import { Link } from 'react-router-dom';

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
```

## { CSS } FOR STYLED COMPONENTS WHEN WE WANT TO SHARE STYLES
- We can import:
``import { css } from 'styled-components';``