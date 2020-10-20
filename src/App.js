import React, { useEffect, useState } from 'react';
import './App.css';
// import states from '../catalogues/states.json'
import SimpleSelect from './components/SimpleSelect'
import BarChart from './charts/BarChart'

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30],
  [60, 30, 40, 20, 40],
  [60, 30, 40, 20, 30]
]
var i = 0;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
      changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if(i === datas.length) i = 0;
}


  return (
    <div>
      <div className="App">
        <h1 className="text-secondary font-weight-bold">Índice de Desarrollo Humano</h1>
        <SimpleSelect />
        <br/>
        <br/>
        <button onClick={changeData}>Change Data</button>
        <br/>
        <br/>
        <BarChart width={600} height={400} data={data} />
      </div>
    </div>
  );
}

export default App;
