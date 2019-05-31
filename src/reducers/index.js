import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Cancion1', duration: '1:00' },
    { title: 'Cancion2', duration: '2:00' },
    { title: 'Cancion3', duration: '3:00' },
    { title: 'Cancion4', duration: '4:00' }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});