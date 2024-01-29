import { pool } from "../../sql/client";

export default function handler(req, res) {
  pool.query(
    `SELECT * FROM Stores;`,
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results);
    }
  );
}
