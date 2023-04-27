import React from 'react';
import './App.css';
import CountriesList from './features/countries/CountriesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountriesList/>
      </header>
    </div>
  );
}

export default App;
