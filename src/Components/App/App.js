import React, {useState, useCallback} from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import UserLogin from '../UserLogin/UserLogin';
import Spotify from '../../Util/Spotify';
//import temp from '../../TempTrackList';

function App() {
  //const tempTracks = temp && temp.map(({name, artist, album , id}) => ({name, artist, album, id}));
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
 

  const submitLogin = useCallback(

  );


  const updatePlaylistName = useCallback(
    (name) => {
      setPlaylistName(name);
    }, []
  );

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addToPlaylist = useCallback((track) =>
    {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
  
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
      }, [playlistTracks]);

  const removeFromPlaylist = useCallback((trackToRemove) => {
      setPlaylistTracks((prevTracks) => 
        prevTracks.filter((track) => track.id !== trackToRemove.id)
        );
      }, []);


  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    })
  }, [playlistName, playlistTracks]);
          
  /*
  //Load temptracks to test functionality ********************
  const loadToSearch = useCallback((testTrack) => {
      //console.log(testTrack);
      if(searchResults.some((searchedTrack) => searchedTrack.id === testTrack.id))
          return;

      setSearchResults((prevTracks) => [...prevTracks, testTrack]);
      }, [searchResults]
  );

  const mapTempTracks = (testTracks) => {
    testTracks.forEach((track) => loadToSearch(track));
  };

  mapTempTracks(tempTracks);
  //console.log(searchResults);
//*************************************************************
*/
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <div className="User-Login">
          <UserLogin submitLogin={submitLogin} />
        </div>
      </header>
      <main>
        <div className="SearchBar-Container">
          <SearchBar onSearch={search} />
        </div>
        <div className="App-Container">
          <SearchResults 
            resultTracks={searchResults}
            onAdd={addToPlaylist}
          />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeFromPlaylist}
            onSave = {savePlaylist}
          />
        </div>
      </main>
      <footer>
        <p>
          Copyright &copy; 2024
        </p>
      </footer>
    </div>
  );
}

export default App;
