import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { movieId, storeId, userId, rentalDate, dueDate } = req.body;

        try {
            const query = `
                INSERT INTO Rentals (MovieID, StoreID, UserID, RentalDate, DueDate, Returned) 
                VALUES (?, ?, ?, ?, ?, FALSE);
            `;
            const values = [movieId, storeId, userId, rentalDate, dueDate];

            const result = await pool.query(query, values);
            res.status(200).json({ message: 'Rental started successfully', result });
        } catch (error) {
            res.status(500).json({ message: 'Error starting rental', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
