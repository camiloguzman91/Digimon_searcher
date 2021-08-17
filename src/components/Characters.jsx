import React from 'react';

import './styles/Characters.css';

const Characters = (props) => {
  
  const digiFilter = props.filteredUsers.map(digimon => (
    <div className="item" key={digimon.name}>
      <h2>{digimon.name}</h2>
      <h3>{digimon.level}</h3>
      <img src={digimon.img} alt={digimon.name} />
    </div>
  ));

  return (
    <div className="characters">
    <h1>Monsters list</h1>
    <h2>Number of characters found: {digiFilter.length} monsters</h2>
      <div className="characters__container">
        {digiFilter.slice(0, 4)}
      </div>
    </div>
  );
};

export default Characters;
