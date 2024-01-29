import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    try {
        const query = 'SELECT StoreID, SUM(RentalFee + LateFee) AS TotalPayments FROM Rentals GROUP BY StoreID;';
        const [rows, fields] = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
