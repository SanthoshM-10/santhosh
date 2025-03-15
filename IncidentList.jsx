import React, { useState, useEffect } from 'react';

function IncidentList() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Call API to fetch incident list
    const fetchIncidents = async () => {
      const response = await fetch('http://localhost:5000/api/incidents');
      const data = await response.json();
      setIncidents(data);
    };
    fetchIncidents();
  }, []);

  return (
    <div>
      <h1>Incident List</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>{incident.type} - {incident.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentList;
