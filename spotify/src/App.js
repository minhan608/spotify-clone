import Navbar from "./components/Navbar";
import DetailSongs from "./components/DetailSongs";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import Data from "./data/song.json";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(Data[0])

  const handleSetSong = (idSong) => {
    const song = Data.find(song => song.id === idSong)
    if(!song) 
           setSong(Data[0])
    else
           setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ Data, song, handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSongs />
          {/* span 2 */}
          <ListSong />
        </div>
        <Player/>
      </Songs.Provider>
    </div>
  );
}

export default App;