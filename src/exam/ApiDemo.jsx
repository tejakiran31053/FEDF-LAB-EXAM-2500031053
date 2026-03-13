import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiDemo = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dummy-json.mock.beeceptor.com/companies')
      .then(response => {
        const data = Array.isArray(response.data) ? response.data : response.data.companies || response.data.data || [];
        setCompanies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API error:", err);
        setError("Failed to fetch data from API.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Corporate API Data</h2>

      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Industry</th>
              <th>Employees</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.name || company.companyName || 'Unknown Company'}</td>
                <td>{company.industry || 'Tech'}</td>
                <td>{company.employees || company.employeeCount || 'N/A'}</td>
                <td>{company.location || company.country || 'Global'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApiDemo;