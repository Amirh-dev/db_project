import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    const { storeId } = req.query;

    if (req.method === 'GET') {
        try {
            const query = 'SELECT * FROM Stores WHERE StoreID = ?';
            const values = [storeId];
            const result = await pool.query(query, values);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
