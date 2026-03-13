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
        <ul>
          {companies.map((company, index) => (
            <li key={index}>
              <strong>{company.name || company.companyName || 'Unknown Company'}</strong> - 
              Industry: {company.industry || 'Tech'}, 
              Employees: {company.employees || company.employeeCount || 'N/A'}, 
              Location: {company.location || company.country || 'Global'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiDemo;
