import React from 'react';
import './App.css';
import FinancialStatements from './components/FinancialStatements';
import KPIs from './components/KPIs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Finance Reporting System</h1>
        <FinancialStatements />
        <KPIs />
      </header>
    </div>
  );
}

export default App;
