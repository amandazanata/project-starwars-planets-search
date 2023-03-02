import React, { useContext } from 'react';
import fetchData from '../services/fetchData';
import StarContext from '../context/StarContext';
import { useDataFetch } from '../hooks/useDataFetch';

function Table() {
  const { planetsApi, dataFilter, atlData } = useContext(StarContext);

  useDataFetch(fetchData, planetsApi); // hook para trazer a api corretamente
  useDataFetch(fetchData, atlData);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {dataFilter.map((planets, index) => (
            <tr key={ index }>
              <td key={ planets.name }>{planets.name}</td>
              <td key={ planets.rotation_period }>{planets.rotation_period}</td>
              <td key={ planets.orbital_period }>{planets.orbital_period}</td>
              <td key={ planets.diameter }>{planets.diameter}</td>
              <td key={ planets.climate }>{planets.climate}</td>
              <td key={ planets.gravity }>{planets.gravity}</td>
              <td key={ planets.terrain }>{planets.terrain}</td>
              <td key={ planets.surface_water }>{planets.surface_water}</td>
              <td key={ planets.population }>{planets.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
