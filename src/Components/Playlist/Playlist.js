import React, {useCallback} from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = (props) => {
    const {playlistName, playlistTracks, onNameChange, onRemove, onSave} = props;

    const handleNameChange = useCallback(
        (event) => {
        onNameChange(event.target.value);
        }, [onNameChange]
    );

    return (
        <div className="Playlist">
            <div className="Playlist-Minor">
                <input className="Input-Title" type="text" value={playlistName} default="New Playlist" onChange={handleNameChange} />
                <Tracklist 
                    tracks={playlistTracks}
                    isRemoval={true}
                    onRemove={onRemove}
                />
            </div>
            <div>
                <button className="Save-Button" value={playlistTracks} onClick={onSave}>
                    Save {`${playlistName}`} to Spotify!
                </button>
            </div>
       </div>
    
    );
}

export default Playlist;