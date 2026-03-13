import React, { useState, useEffect } from 'react';

const Display = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('farmers')) || [];
    setFarmers(data);
  }, []);

  return (
    <div>
      <h2>Registered Farmers</h2>
      {farmers.length === 0 ? (
        <p>No farmers registered yet.</p>
      ) : (
        <div>
          {farmers.map((farmer, index) => (
            <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <h3>{farmer.name}</h3>
              <p>Age: {farmer.age}</p>
              <p>Gender: {farmer.gender}</p>
              <p>Email: {farmer.email}</p>
              <p>Acres: {farmer.acres}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Display;
