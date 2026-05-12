 //In this component, we will create a search bar that allows users to input their search criteria. The SearchBar component will receive a prop called onSearch, which is a function that will be called whenever the user types in the search bar. This function will update the search term in the parent component (Cars.jsx) and trigger the filtering of the car list based on the search criteria.
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Call the onSearch function passed as a prop
  };

  return (
    <input
      type="text"
      placeholder="Search by make or model..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;