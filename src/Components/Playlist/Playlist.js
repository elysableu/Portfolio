import React, {useCallback} from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
        props.onNameChange(event.target.value);
        }, []
    );

    return (
        <div className="Playlist">
            <div className="Playlist-Minor">
                <input className="Input-Title" type="text" value={props.playlistName} default="New Playlist" onChange={handleNameChange} />
                <Tracklist 
                    tracks={props.playlistTracks}
                    isRemoval={true}
                    onRemove={props.onRemove}
                />
            </div>
            <div>
                <button className="Save-Button">
                    Save {`${props.playlistName}`} to Spotify!
                </button>
            </div>
       </div>
    
    );
}

export default Playlist;