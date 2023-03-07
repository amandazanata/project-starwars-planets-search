import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  const { planets, setPlanets } = useContext(StarContext);
  const { filtre } = useContext(StarContext);

  const [data, setData] = useState('');

  const [filterNumbers, setFilterNumbers] = useState(0);

  const [genericFilter, setGenericFilter] = useState('maior que');
  const [column, setColumn] = useState('population');

  const [inicialState, setInicialState] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [selectColumn, setSelectColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleInput = ({ target }) => {
    setData(target.value);
    if (!data) {
      setPlanets(planets);
    }
  };

  const names = planets.filter(({ name }) => name.includes(data));

  const handleFilter = () => { // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
    setInicialState(planets);
    const filterTest = names.filter((element) => {
      switch (genericFilter) {
      case 'maior que':
        return +(element[column]) > +(filterNumbers); // https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals
      case 'menor que':
        return +(element[column]) < +(filterNumbers);
      default:
        return +(element[column]) === +(filterNumbers);
      }
    });
    setPlanets(filterTest);

    const list = selectColumn.filter((value) => !column.includes(value));

    setSelectColumn(list);

    setColumn(list[0]);

    setFilterState([...filterState,
      { filterNumbers,
        genericFilter,
        column }]);
  };

  const handleClick = ({ target }) => {
    if (filterState.length > 1) {
      const firstArray = filterState.filter((value) => value.column !== target.id);
      setFilterState(firstArray);
      setPlanets(inicialState);
    } else if (filterState) {
      const secondArray = filterState.filter((value) => value.column !== target.id);
      setFilterState(secondArray);
      setPlanets(filtre);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <td />
          <th>Rotation Period</th>
          <td />
          <th>Orbital Period</th>
          <td />
          <th>Diameter</th>
          <td />
          <th>Climate</th>
          <td />
          <th>Gravity</th>
          <td />
          <th>Terrain</th>
          <td />
          <th>Surface Water</th>
          <td />
          <th>Population</th>
          <td />
          <th>Films</th>
          <td />
          <th>Created</th>
          <td />
          <th>Edited</th>
          <td />
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {names?.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
        <input
          data-testid="name-filter"
          type="text"
          value={ data }
          onChange={ handleInput }
        />
        <select
          data-testid="column-filter"
          name="column"
          onChange={ ({ target }) => { setColumn(target.value); } }
        >
          {selectColumn?.map((planet) => (
            <option
              value={ planet }
              key={ planet }
            >
              {planet}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ genericFilter }
          onChange={ ({ target }) => { setGenericFilter(target.value); } }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ filterNumbers }
          onChange={ ({ target }) => { setFilterNumbers(target.value); } }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => handleFilter() }
        >
          Filter
        </button>
        { filterState?.map((filter, index) => (
          <div data-testid="filter" key={ index }>
            <span>
              {filter.column}
              {' '}
              {filter.genericFilter}
              {' '}
              {filter.filterNumbers}
            </span>
            <button
              type="button"
              id={ filter.column }
              onClick={ handleClick }
            >
              Delete
            </button>
          </div>
        )) }
        <button
          data-testid="button-remove-filters"
          onClick={ () => {
            setFilterState([]);
            setColumn('');
            setGenericFilter('');
            setFilterNumbers('');
            setPlanets(filtre);
          } }
        >
          Filter Remove
        </button>
      </tbody>
    </table>
  );
}

export default Table;
