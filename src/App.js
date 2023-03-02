import React from 'react';
import StarProvider from './context/StarProvider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <StarProvider>
      <Table />
    </StarProvider>
  );
}

export default App;
