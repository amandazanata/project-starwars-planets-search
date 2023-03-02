import React from 'react';
import StarContext from '../context/StarContext';

function FiltersPlanets() {
  const { filtra } = useContext(StarContext);

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value=""
      />
    </form>
  );
}

export default FiltersPlanets;
