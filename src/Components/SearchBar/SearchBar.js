import React, {useCallback, useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    
    const handleTermChange = useCallback((event) => {
        props.setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch();
    }, [props.onSearch, props.searchTerm]);

    return (
        <div className="SearchBar">
            <input className="Search-Input" 
                placeholder="Search a title" 
                onChange={handleTermChange} 
                onKeyDown={(event) => {
                    if(event.key === "Enter") 
                        search(event);
                }} 
            />
            <button className="Submit-Button" onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;