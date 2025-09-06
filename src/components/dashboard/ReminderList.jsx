import React from "react";

function ReminderList({ reminders }) {
  return (
    <ul>
      {reminders.map((reminder, index) => (
        <li key={index}>{reminder}</li>
      ))}
    </ul>
  );
}

export default ReminderList;
