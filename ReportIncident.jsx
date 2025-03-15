import React, { useState } from 'react';

function ReportIncident() {
  const [incident, setIncident] = useState({
    type: '',
    location: '',
    description: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to report incident
    console.log(incident);
  };

  return (
    <div>
      <h1>Report Incident</h1>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <input type="text" value={incident.type} onChange={(event) => setIncident({ ...incident, type: event.target.value })} />
        <br />
        <label>Location:</label>
        <input type="text" value={incident.location} onChange={(event) => setIncident({ ...incident, location: event.target.value })} />
        <br />
        <label>Description:</label>
        <textarea value={incident.description} onChange={(event) => setIncident({ ...incident, description: event.target.value })} />
        <br />
        <button type="submit">Report Incident</button>
      </form>
    </div>
  );
}

export default ReportIncident;