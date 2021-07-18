import React from 'react';
import useCharacters from '../hooks/useCharacters.js';
import './styles/Characters.css';

const API = 'https://digimon-api.vercel.app/api/digimon';

const Characters = () => {

  const characters = useCharacters(API)

  return (
    <div className="characters">
      <h1>Lista de monstruos</h1>
      <div className="characters__container">
        {characters.map(digimon => (
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
