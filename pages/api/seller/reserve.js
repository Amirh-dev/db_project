import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userId, movieId, storeId } = req.body;

        const query = `
            INSERT INTO Rentals (UserID, MovieID, StoreID, RentalDate, ReturnDate, Returned)
            VALUES (?, ?, ?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 7 DAY), FALSE)
        `;

        try {
            const result = await pool.query(query, [userId, movieId, storeId]);
            res.status(200).json({ message: 'Reservation successful', result });
        } catch (error) {
            res.status(500).json({ message: 'Error in reservation', error });
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
