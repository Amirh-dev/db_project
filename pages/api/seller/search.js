// pages/api/seller/search.js
import { pool } from '../../../sql/client';

export default async function handler(req, res) {
  const { actor, genre, title, language, year } = req.query;

  try {
    const query = `
      SELECT * FROM Movies
      WHERE
        Actor LIKE '%${actor}%' AND
        Genre LIKE '%${genre}%' AND
        Title LIKE '%${title}%' AND
        Language LIKE '%${language}%' AND
        Year = ${year}
    `;

    const [results] = await pool.query(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error querying the database', error });
  }
}
