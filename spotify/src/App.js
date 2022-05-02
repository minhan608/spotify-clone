import './App.css';
import Navbar from './components/Navbar'
import DetailSongs from './components/DetailSongs'
import ListSong from './components/ListSong'
import { Songs } from '../src/Context.js'
import Data from './data/song.json'
function App() {
  return (
    <div className='App'>
     <Songs.Provider value={{Data}}>
     <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>

        {/*span 1*/}
          <DetailSongs/>
        {/*span 2*/}
          <ListSong/>
        </div>
     </Songs.Provider>
      </div>
  )
}

export default App;
