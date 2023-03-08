import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function StarProvider({ children }) {
/*   console.log(children); */
  const [planetsFetch, setPlanetsFetch] = useState([]);
  const [filtre, setFiltre] = useState([]);

  const fetchData = async (url) => { // mentoria Thiago Quadros - 28/02/2023
    const results = await fetch(url);
    const data = await results.json();
    const retorno = data.results;
    retorno.filter((planet) => delete planet.residents);
    setPlanetsFetch(data.results);
    setFiltre(data.results);
  };

  useEffect(() => { // mentoria Thiago Quadros - 28/02/2023
    const url = 'https://swapi.dev/api/planets';
    fetchData(url);
  }, []);

  const contextValue = useMemo(() => ({
    planetsFetch, setPlanetsFetch, filtre, setFiltre,
  }), [planetsFetch, filtre]);

  return (
    <StarContext.Provider value={ contextValue }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
