import React from 'react';

const FighterCard = ({ fighter, handleAction, actionText }) => {
  return (
    <div className="fighter-item">
      <img src={fighter.img} alt={fighter.name} className="fighter-img" />
      <h4>{fighter.name}</h4>
      <p>Price: ${fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => handleAction(fighter)}>{actionText}</button>
    </div>
  );
};

export default FighterCard;