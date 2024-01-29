import React, { useEffect, useState } from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/api/seller/movies')
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.MovieID}>
                        {movie.Title} - Rentals: {movie.TotalRentals} - Average Rating: {movie.AverageRating.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;
