import React, { useState } from 'react';

export default function MovieSearch() {
  const [searchParams, setSearchParams] = useState({
    actor: '',
    genre: '',
    title: '',
    language: '',
    year: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const query = new URLSearchParams(searchParams).toString();
    const response = await fetch(`/api/seller/search?${query}`);
    const data = await response.json();
    setSearchResults(data);
  };

  return (
    <div>
      {/* Form for search inputs */}
      <input
        type="text"
        placeholder="Actor"
        value={searchParams.actor}
        onChange={(e) => setSearchParams({ ...searchParams, actor: e.target.value })}
      />
      {/* Repeat for other fields: genre, title, language, year */}
      
      <button onClick={handleSearch}>Search</button>

      {/* Display search results */}
      <div>
        {searchResults.map((movie, index) => (
          <div key={index}>
            <h3>{movie.Title}</h3>
            <p>Genre: {movie.Genre}</p>
            {/* ... other movie details */}
          </div>
        ))}
      </div>
    </div>
  );
}
