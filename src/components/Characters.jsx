import React from 'react';

import './styles/Characters.css';

const Characters = (props) => {

  return (
    <div className="characters">
      <h1>Monsters list</h1>
      <div className="characters__container">
        {props.filteredUsers.map(digimon => (
          <div className="item" key={digimon.name}>
            <h2>{digimon.name}</h2>
            <h3>{digimon.level}</h3>
            <img src={digimon.img} alt={digimon.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
