import React, { useState, useEffect } from 'react';

function ResourceList() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Call API to fetch resource list
    const fetchResources = async () => {
      const response = await fetch('http://localhost:5000/api/resources');
      const data = await response.json();
      setResources(data);
    };
    fetchResources();
  }, []);

  return (
    <div>
      <h1>Resource List</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>{resource.name} - {resource.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceList;