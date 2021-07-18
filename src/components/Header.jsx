import React, { useState, useRef, useCallback } from 'react';
import Search from './Search';
import './styles/Header.css';

const Header = () => {

  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  return (
    <div className="Header">
      <img src="https://i.imgur.com/3iS19rK.png" alt="Digimon" />
      <div className="search_container">
        <p>Buscar: </p>
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Header;
