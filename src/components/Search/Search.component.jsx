import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import './search.styles.css';

import { geoApiOptions, GEO_API_URL } from '../../utils/api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const onSearchChangeHandler = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const onLoadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}. ${city.countryCode} `,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={onSearchChangeHandler}
      loadOptions={onLoadOptions}
    />
  );
};

export default Search;
