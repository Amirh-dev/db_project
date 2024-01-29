// pages/api/customers.js
import { pool } from '../../../sql/client';

export default async function handler(req, res) {
  try {
    const managerId = req.query.managerId; 

    const query = `
      SELECT Users.*
      FROM Users
      JOIN Rentals ON Users.UserID = Rentals.UserID
      JOIN StoreManagers ON Rentals.StoreID = StoreManagers.StoreID
      WHERE StoreManagers.UserID = ?;
    `;

    const [customers] = await pool.query(query, [managerId]);
    res.status(200).json({ customers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
