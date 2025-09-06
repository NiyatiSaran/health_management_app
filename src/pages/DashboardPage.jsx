import React from "react";
import StatsCard from "../components/dashboard/StatsCard";
import Chart from "../components/dashboard/Chart";
import ReminderList from "../components/dashboard/ReminderList";
import "../style/DashboardPage.css"; // optional CSS

function DashboardPage() {
  // Example dummy data
  const stats = [
    { label: "Steps", value: 7500 },
    { label: "Calories Burned", value: 400 },
    { label: "Water Intake", value: "2L" },
  ];

  const reminders = [
    "Take medicine at 8 AM",
    "Drink water at 10 AM",
    "Workout at 6 PM",
  ];

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      {/* Stats Cards */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatsCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>

      {/* Chart */}
      <div className="chart-container">
        <Chart />
      </div>

      {/* Reminders */}
      <div className="reminders-container">
        <h2>Reminders</h2>
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default DashboardPage;
