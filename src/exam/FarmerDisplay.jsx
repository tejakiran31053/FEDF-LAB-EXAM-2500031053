import React, { useState, useEffect } from 'react';

const FarmerDisplay = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('farmers')) || [];
    setFarmers(data);
  }, []);

  return (
    <div>
      <h2>Registered Farmers</h2>

      {farmers.length === 0 ? (
        <p>No farmers registered</p>
      ) : (
        <table border="1"  style={{ width: '40%', marginTop: '10px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Acres</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer, index) => (
              <tr key={index}>
                <td>{farmer.name}</td>
                <td>{farmer.age}</td>
                <td>{farmer.gender}</td>
                <td>{farmer.email}</td>
                <td>{farmer.acres}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FarmerDisplay;
