import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KPIs() {
  const [kpis, setKpis] = useState([]);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get('/api/kpis').then(response => {
      setKpis(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/kpis', { name, value, user_id: 1 }).then(response => {
      setKpis([...kpis, response.data]);
    });
  };

  return (
    <div>
      <h2>KPIs</h2>
      <ul>
        {kpis.map(kpi => (
          <li key={kpi.id}>{kpi.name}: {kpi.value}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Add KPI</button>
      </form>
    </div>
  );
}

export default KPIs;
