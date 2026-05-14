import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Call the onSearch function passed as a prop
  };

  return (
    <div className="search-shell">
      <span aria-hidden="true">Search</span>
      <input
        type="text"
        placeholder="Search by name, fuel, transmission..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
