import React, { useState, useEffect } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/seller/list-movies-by-genre');
      const data = await res.json();
      setMovies(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>فیلم‌ها بر اساس ژانر</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.MovieID}>{movie.Title} - {movie.GenreName}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
