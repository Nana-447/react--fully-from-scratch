import React from 'react';

import './search-box.styles.css';

// Component receiving props and a function inside its parameters (handleChange)
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
);