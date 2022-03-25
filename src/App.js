import "./App.css";
import React, { useState } from 'react'
import BarChart from "./components/BarChart";
import {LanguageData}  from './Data'

const App = () => {

  const [languageData, setLanguageData] = useState({
    labels: LanguageData.map((data) => data.name),
    datasets: [{
      label: 'Popularity of Programming Languages',
      data: LanguageData.map((data) => data.avgSalary),
backgroundColor: ['red', 'yellow', 'blue', 'green', 'purple']
    }]
  })
  return (
    <div>
      <div style={{width: 700}}>
      <BarChart chartData={languageData}/>
      </div>
    </div>
  );
};

export default App;
