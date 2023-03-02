import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StarProvider from './context/StarProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StarProvider>
    <App />
  </StarProvider>,
);
