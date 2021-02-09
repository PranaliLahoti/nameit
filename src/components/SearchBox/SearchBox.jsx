import React from 'react';
import './SearchBox.css'
const SearchBox = ({ onInputChangefun }) => {
    return (
        <div className="search-container">
            <input onChange={(event) => { onInputChangefun(event.target.value) }} placeholder="Type Keywords" className="search-input"></input>
        </div>
    )
}

export default SearchBox