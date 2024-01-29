import { pool } from '../../sql/client';

export default function handler(req, res) {
  const query = `SELECT * FROM Movies where Title like "%${req.body.keyword}%";`;
  pool.query(
    query,
    (error, results) => {
      console.log(query);
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results);
    },
  );
}
