import React, { useState } from 'react';
import './App.css';
import Bread from './components/Bread.tsx';
import Fillers from './components/Fillers.tsx';

const fillerOptions = [
  { type: 'Meat', color: 'brown' },
  { type: 'Lettuce', color: 'green' },
  { type: 'Tomato', color: 'red' },
  { type: 'Cheese', color: 'gold'}
];

function App() {
  const [fillers, setFillers] = useState([
    { type: 'Meat', color: 'brown' },
    { type: 'Lettuce', color: 'green' },
    { type: 'Tomato', color: 'red' },
  ]);

  const handleAddFiller = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFiller = fillerOptions.find(filler => filler.type === event.target.value);
    if (selectedFiller) {
      setFillers([...fillers, selectedFiller]);
    }
  };

  const handleRemoveFiller = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFiller = event.target.value;
    const index = fillers.findIndex(filler => filler.type === selectedFiller);
    if (index !== -1) {
      const newFillers = [...fillers];
      newFillers.splice(index, 1);
      setFillers(newFillers);
    }
  };

  return (
    <div className="App">
      <h1>ACA Burger</h1>
      <Bread BreadColor="goldenrod" BreadType="Top Bread" />
      {fillers.map((filler, index) => (
        <Fillers key={index} FillerColor={filler.color} FillerType={filler.type} />
      ))}
      <Bread BreadColor="goldenrod" BreadType="Base Bread" />

      <div>
        <br/>
        <br/>
        <label>Add Filler: </label>
        <select onChange={handleAddFiller} defaultValue="">
          <option value="" disabled>Select a filler</option>
          {fillerOptions.map((filler, index) => (
            <option key={index} value={filler.type}>{filler.type}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Remove Filler: </label>
        <select onChange={handleRemoveFiller} defaultValue="">
          <option value="" disabled>Select a filler</option>
          {fillers.map((filler, index) => (
            <option key={index} value={filler.type}>{filler.type}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
