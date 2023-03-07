import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function StarProvider({ children }) {
/*   console.log(children); */
  const [planets, setPlanets] = useState([]);
  const [filtre, setFiltre] = useState([]);

  const fetchData = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    const retorno = data.results;
    retorno.filter((planet) => delete planet.residents);
    setPlanets(data.results);
    setFiltre(data.results);
  };

  useEffect(() => {
    const url = 'https://swapi.dev/api/planets';
    fetchData(url);
  }, []);

  const contextValue = useMemo(() => ({
    planets, setPlanets, filtre, setFiltre,
  }), [planets, filtre]);

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
