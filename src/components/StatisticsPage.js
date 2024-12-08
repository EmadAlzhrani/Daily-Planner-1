import React from "react";

const StatisticsPage = ({ stats }) => (
  <div id="stats">
    <h2>Task Summary</h2>
    <p>Total Tasks: {stats.total}</p>
    <p>Work Tasks: {stats.work}</p>
    <p>Personal Tasks: {stats.personal}</p>
    <p>Urgent Tasks: {stats.urgent}</p>
    <p>Upcoming Deadlines: {stats.deadlines}</p>
  </div>
);

export default StatisticsPage;
