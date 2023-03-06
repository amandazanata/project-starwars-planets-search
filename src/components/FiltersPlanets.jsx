import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import NumberFilters from './NumberFilters';

function FiltersPlanets() {
  const { filtra } = useContext(StarContext);

  const initialState = {
    filterName: {
      name: '',
    },
  };

  const [input, setInput] = useContext(initialState);

  const handleChange = ({ target: { value } }) => {
    setInput({
      filterName: {
        name: value,
      },
    });
    filtra(value);
  };

  return (
    <header>
      <h1>Star Wars Planets Project</h1>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        value={ input.filterName.name }
      />
      <NumberFilters />
    </header>
  );
}

export default FiltersPlanets;
