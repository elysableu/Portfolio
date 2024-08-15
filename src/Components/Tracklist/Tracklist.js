import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

const Tracklist = (props) => {
    const {tracks, isRemoval, onRemove, onAdd} = props;

    return (
        <div className="TrackList">
            {tracks.map((track) => {
                return (
                    <Track 
                        key={track.id}
                        track={track}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoval={isRemoval}
                    />
                );
            })}
        </div>
    );
};

export default Tracklist;