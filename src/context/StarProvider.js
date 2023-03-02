import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function StarProvider({ children }) {
/*   console.log(children); */
  const [data, setData] = useState([]);

  const planetsApi = useCallback((planets) => { // https://pt.stackoverflow.com/questions/405781/qual-%C3%A9-a-diferen%C3%A7a-entre-os-hooks-usememo-e-usecallback-do-react
    setData(planets);
  }, []);

  const [dataFilter, setDataFilter] = useState(data);

  const atlData = useCallback((planet) => {
    setDataFilter(planet);
  }, []);

  const filtra = (input) => {
    const array = data.filter((planet) => planet.name.includes(input));
    setDataFilter(array);
  };

  const contextValue = {
    data,
    planetsApi,
    dataFilter,
    atlData,
    filtra,
  };

  return (
    <StarContext.Provider value={ contextValue }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;