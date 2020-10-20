import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
// import states from '../catalogues/states.json'
import SimpleSelect from './components/SimpleSelect'

function App() {
  return (
    <div>
      <div className="App">
        <h1 className="text-secondary font-weight-bold">Índice de Desarrollo Humano</h1>
        <SimpleSelect />
        <br />
        <br />
        <BarChart />
      </div>
    </div>
  );
}

export default App;
