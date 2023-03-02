const fetchData = () => fetch('https://swapi.dev/api/planets')
  .then((response) => response.json());
/* console.log(fetchData()); */

export default fetchData;
