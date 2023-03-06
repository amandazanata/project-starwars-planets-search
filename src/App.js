import React from 'react';
import StarProvider from './context/StarProvider';
import Table from './components/Table';
import './App.css';
import FiltersPlanets from './components/FiltersPlanets';

function App() {
  return (
    <StarProvider>
      <FiltersPlanets />
      <Table />
    </StarProvider>
  );
}

export default App;
