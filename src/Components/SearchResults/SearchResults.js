import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = (props) => {    

   return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist 
               tracks={props.resultTracks}
               onAdd={props.onAdd}
            />
        </div>
    );
}

export default SearchResults;