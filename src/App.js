import "./App.css";
import React, { useState } from "react";
import { LanguageData } from "./Data";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/Doughnut";
import Table from "./components/Table"


const App = () => {
  const [languageData, setLanguageData] = useState({
    labels: LanguageData.map((data) => data.name),
    datasets: [
      {
        label: "Popularity of Programming Languages by Salary",
        data: LanguageData.map((data) => data.avgSalary),
        backgroundColor: [
          "#9896D9",
          "#8F8EBF",
          "#A0D9CE",
          "#D9D4D0",
          "#F29188",
        ],
        borderColor: "gray",
        borderWidth: 1,

      },
    ],
    
  });


  return (
    <div className="container">
      <div>
        <Table chartData={languageData}/>
      </div>
      <div style={{ width: 600 }}>
        <BarChart chartData={languageData} />
      </div>
      <div style={{ width: 300 }}>
        <DoughnutChart chartData={languageData} />
      </div>
    </div>
  );
};

export default App;
