import "./App.css";
import React, { useState } from "react";
import BarChart from "./components/BarChart";
import Table from "./components/Table";
import { LanguageData } from "./Data";

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
    <div>
      <div style={{ width: 700 }}>
        <BarChart chartData={languageData} />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default App;
