import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = (props) => {    
    const {resultTracks, onAdd} = props;


   return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist 
               tracks={resultTracks}
               onAdd={onAdd}
            />
        </div>
    );
}

export default SearchResults;