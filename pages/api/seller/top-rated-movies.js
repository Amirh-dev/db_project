import { pool } from '../../../sql/client';

export default async function handler(req, res) {
  try {
    const topRatedOverall = await pool.query(
      `SELECT MovieID, AVG(Rating) as AverageRating
       FROM MovieRatings
       GROUP BY MovieID
       ORDER BY AverageRating DESC
       LIMIT 1;`
    );

    const topRatedByGenre = await pool.query(
      `SELECT Genres.GenreName, Movies.MovieID, AVG(MovieRatings.Rating) as AverageRating
       FROM Movies
       JOIN Genres ON Movies.GenreID = Genres.GenreID
       JOIN MovieRatings ON Movies.MovieID = MovieRatings.MovieID
       GROUP BY Genres.GenreName, Movies.MovieID
       ORDER BY Genres.GenreName, AverageRating DESC;`
    );

    res.status(200).json({ topRatedOverall, topRatedByGenre });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
