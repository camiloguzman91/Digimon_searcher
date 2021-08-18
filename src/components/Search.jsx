import React from 'react';
import './styles/Searcher.css';

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="search">
      <input className="searcher" type="text" value={search} ref={searchInput} onChange={handleSearch} />
    </div>
  )
}

export default Search;
