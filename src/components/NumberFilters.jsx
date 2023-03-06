import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function NumberFilters() {
  const { filterProvNumbers } = useContext(StarContext);

  const initialState = {
    column: 'population',
    columnFilter: 'maior que',
    value: 'O',
  };

  const [filterNumberValues, setFilterNumberValues] = useState(initialState);

  const handleInput = ({ target }) => { // salva o input no estado da aplicação
    const { name, value } = target;
    setFilterNumberValues({
      ...filterNumberValues,
      [name]: value,
    });
  };

  const [input, setInput] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleColumn = (column) => {
    const columnRemove = input.filter((select) => select !== column);
    setInput(columnRemove);
  };

  const filteredArray = () => {
    const { column } = filterNumberValues;

    filterProvNumbers(filterNumberValues);

    setFilterNumberValues({
      column: input[0],
      columnFilter: 'maior que',
      value: O,
    });

    handleColumn(column);
  };

  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
        value={ handleInput }
        onChange={ filterNumberValues.column }
      >
        {
          input.map((planet) => (
            <option
              value={ select }
              key={ select }
            >
              {planet}
            </option>
          ))
        }
      </select>
      <select
        name={ columnFilter }
        data-testid="comparison-filter"
        value={ filterNumberValues.columnFilter }
        onChange={ handleInput }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ filterNumberValues.value }
        onChange={ handleInput }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filteredArray }
      >
        Filter
      </button>
    </form>
  );
}

export default NumberFilters;
