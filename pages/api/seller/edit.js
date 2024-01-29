import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { storeId, storeName, address } = req.body;
        try {
            const query = 'UPDATE Stores SET StoreName = ?, Address = ? WHERE StoreID = ?';
            const values = [storeName, address, storeId];
            await pool.query(query, values);
            res.status(200).json({ message: 'Store updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
