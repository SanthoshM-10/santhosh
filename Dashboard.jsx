import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Disaster Management System Dashboard</h1>
      <ul>
        <li><a href="/report-incident">Report Incident</a></li>
        <li><a href="/incident-list">Incident List</a></li>
        <li><a href="/resource-list">Resource List</a></li>
      </ul>
    </div>
  );
}

export default Dashboard;
