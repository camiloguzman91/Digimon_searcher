import React, { useCallback, useState, useRef, useMemo }from 'react';
import Header from './components/Header';
import useCharacters from './hooks/useCharacters.js';
import Characters from './components/Characters';
import './App.css';

const API = 'https://digimon-api.vercel.app/api/digimon';

const App = () => {
  
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);
    const characters = useCharacters(API)
  
    const handleSearch = useCallback(() => {
      setSearch(searchInput.current.value);
    }, [])
  
    const filteredUsers = useMemo(() =>
      characters.filter((user) => {
        /*for(var i = 0; i < characters.length; i++) {
          if(characters.length > 4) 
          console.log(characters[i]);
        }*/
        while (characters.length < 0) {
          console.log(characters[5])
        }
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
      [characters, search]
    )
  
  return (
    <div className="App">
      <Header search={search} searchInput={searchInput} handleSearch={handleSearch} />
      <Characters filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
