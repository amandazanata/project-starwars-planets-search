import React, { useState } from 'react';
import swContext from './StarContext';

function StarProvider({ children }) {
  return (
    <swContext.Provider value={ state }>
      {children}
    </swContext.Provider>
  );
}

export default StarProvider;
