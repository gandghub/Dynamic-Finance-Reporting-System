import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FinancialStatements() {
  const [statements, setStatements] = useState([]);
  const [type, setType] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/api/financial-statements').then(response => {
      setStatements(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/financial-statements', { type, data, user_id: 1 }).then(response => {
      setStatements([...statements, response.data]);
    });
  };

  return (
    <div>
      <h2>Financial Statements</h2>
      <ul>
        {statements.map(statement => (
          <li key={statement.id}>{statement.type}: {statement.data}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
        <textarea placeholder="Data" value={data} onChange={(e) => setData(e.target.value)}></textarea>
        <button type="submit">Add Statement</button>
      </form>
    </div>
  );
}

export default FinancialStatements;
