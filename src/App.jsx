import React, { useState } from 'react'
import FighterCard from './Components/FighterCard.jsx'
import './App.css'

function App() {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState([100]) 
  const [totalStrength, setTotalStrength] = useState([])
  const [totalAgility, setTotalAgility] = useState([])
  
  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' },
  ];
  
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)
      setTotalStrength(totalStrength + fighter.strength)
      setTotalAgility(totalAgility + agility.strength)
    } else {
      console.log('not enough money')
    }
    }

    
    return (
      <div className="App">
        <h1>Zombie Fighters</h1>
        <h2>Money: ${money}</h2>
        <h2>Total Team Strength: {totalStrength}</h2>
        <h2>Total Team Agility: {totalAgility}</h2>

        <h3>Available Zombie Fighters:</h3>
      <ul className="fighter-list">
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <FighterCard
              fighter={fighter}
              handleAction={handleAddFighter}
              actionText="Add"
            />
          </li>
        ))}
      </ul>
      
      </div>
    )
  }

export default App