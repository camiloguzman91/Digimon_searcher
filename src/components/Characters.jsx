import React, { useState } from 'react';

import './styles/Characters.css';

const Characters = (props) => {

  const [visible, setVisible] = useState(4);

  const ShowMoreDigimon = () => {
    setVisible((prevValue) => prevValue + 4);
  }
  
  const digiFilter = props.filteredUsers.map(digimon => (
    <div className="item" key={digimon.name}>
      <h2 className="digiName">{digimon.name}</h2>
      <h3>{digimon.level}</h3>
      <img src={digimon.img} alt={digimon.name} />
    </div>
  ));

  return (
    <>
      <div className="characters">
      <h1>Monsters list</h1>
      <h2>Number of characters found: <span className="numChar">{digiFilter.length}</span> monsters</h2>
        <div className="characters__container">
          {digiFilter.slice(0, visible)}
        </div>
      </div>
      <button onClick={ShowMoreDigimon} type="button">Load more</button>
    </>
  );
};

export default Characters;
