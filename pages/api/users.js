import { pool } from '../../sql/client';

export default function handler(req, res) {
  if (req.method === 'POST') {
    postHandler(req, res);
  } else if (req.method === 'PUT') {
    putHandler(req, res);
  }
}

function postHandler(req, res) {
  pool.query(
    `SELECT * FROM Users WHERE UserID = ${req.body.id};`,
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results);
    },
  );
}

function putHandler(req, res) {
  pool.query(
    `UPDATE Users SET FirstName = '${req.body.FirstName}', LastName = '${req.body.LastName}', Email = '${req.body.Email}' WHERE UserID = ${req.body.UserID};`,
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results);
    },
  );
}
