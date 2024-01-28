import { pool } from "../../sql/client";

export default function handler(req, res) {
  pool.query(
    `SELECT s.StoreID, s.Name AS StoreName, c.CustomerID, c.Name AS CustomerName
     FROM Stores s
     JOIN Rentals r ON s.StoreID = r.StoreID
     JOIN Customers c ON r.CustomerID = c.CustomerID
     GROUP BY s.StoreID, c.CustomerID;`,
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results);
    }
  );
}
