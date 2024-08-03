import React, {useCallback, useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="SearchBar">
            <input className="Search-Input" 
                placeholder="Search a title"
                value={term} 
                onChange={handleTermChange} 
                onKeyDown={(event) => {
                    if(event.key === "Enter") 
                        search(term);
                }} 
            />
            <button className="Submit-Button" onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;