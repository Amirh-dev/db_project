import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const query = `
                SELECT * FROM Rentals
                WHERE Returned = FALSE;
            `;
            const [results] = await pool.query(query);
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
