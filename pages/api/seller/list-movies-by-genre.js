import { pool } from '../../../sql/client';

export default async function handler(req, res) {
  try {
    const result = await pool.query(
      `SELECT Movies.MovieID, Movies.Title, Genres.GenreName
       FROM Movies
       JOIN Genres ON Movies.GenreID = Genres.GenreID;`
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
