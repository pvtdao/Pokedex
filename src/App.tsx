import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { pokemonAPI } from './api/pokemonAPI';
import './App.css';
import Berries from './Components/Berries/Berries';
import EmptyWarning from './Components/Common/EmptyWarning';
import Contest from './Components/Contests/Contest';
import Evolutions from './Components/Evolutions/Evolutions';
import Games from './Components/Games/Games';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import Location from './Components/Locations/Location';
import Navbar from './Components/NavBar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import DetailPokemon from './Components/Pokemon/DetailPokemon';
import Pokemon from './Components/Pokemon/Pokemon';
import AppContext from './context/appContext';
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      <div className='font-mono text-13 overflow-x-hidden min-h-screen overflow-y-auto  pt-2 bg-yellow-200 from-yellow-200 via-yellow-200 to-yellow-300 '>
        <div className=''>
          <Navbar />
          <div className='mt-10'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pokemons/' element={<Pokemon />} />
              <Route path='/pokemons/:name' element={<DetailPokemon />} />
              <Route path='/items/' element={<Items />} />
              <Route path='/evolution/' element={<Evolutions />} />
              <Route path='/berries/' element={<Berries />} />
              <Route path='/contests/' element={<Contest />} />
              <Route path='/games/' element={<Games />} />
              <Route path='/locations/' element={<Location />} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
