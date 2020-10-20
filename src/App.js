import React from 'react';
import './App.css';
// import states from '../catalogues/states.json'
import SimpleSelect from './components/SimpleSelect'

function App() {
  return (
    <div>
      <div className="App">
        <h1 className="text-secondary font-weight-bold">Índice de Desarrollo Humano</h1>
      </div>
      <div className="App">
        <SimpleSelect />
     
      </div>
    </div>
  );
}

export default App;
