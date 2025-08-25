import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Performance = () => {
  const [filter, setFilter] = useState("3m");

  const data = {
    "3m": [
      { month: "June", performance: 80 },
      { month: "July", performance: 85 },
      { month: "August", performance: 90 },
    ],
    "6m": [
      { month: "March", performance: 70 },
      { month: "April", performance: 75 },
      { month: "May", performance: 78 },
      { month: "June", performance: 80 },
      { month: "July", performance: 85 },
      { month: "August", performance: 90 },
    ],
    "1y": [
      { month: "Sep", performance: 65 },
      { month: "Oct", performance: 70 },
      { month: "Nov", performance: 72 },
      { month: "Dec", performance: 74 },
      { month: "Jan", performance: 76 },
      { month: "Feb", performance: 79 },
      { month: "Mar", performance: 82 },
      { month: "Apr", performance: 84 },
      { month: "May", performance: 86 },
      { month: "Jun", performance: 88 },
      { month: "Jul", performance: 89 },
      { month: "Aug", performance: 90 },
    ],
  };

  return (
    <div className="performance">
      <h2>Employee Performance</h2>
      <div className="filter-buttons">
        <button onClick={() => setFilter("3m")}>3 Months</button>
        <button onClick={() => setFilter("6m")}>6 Months</button>
        <button onClick={() => setFilter("1y")}>1 Year</button>
      </div>

      <LineChart width={600} height={300} data={data[filter]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="performance" stroke="#8884d8" />
      </LineChart>

      <div className="tips">
        <h3>Tips to Improve:</h3>
        <ul>
          <li>Maintain consistency in tasks</li>
          <li>Take short breaks for productivity</li>
          <li>Communicate with your team regularly</li>
        </ul>
      </div>
    </div>
  );
};

export default Performance;
