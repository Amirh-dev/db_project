import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { rentalId, returnDate } = req.body;

        try {
            const query = `
                UPDATE Rentals 
                SET ReturnDate = ?, Returned = TRUE 
                WHERE RentalID = ?;
            `;
            const values = [returnDate, rentalId];

            const result = await pool.query(query, values);
            res.status(200).json({ message: 'Rental ended successfully', result });
        } catch (error) {
            res.status(500).json({ message: 'Error ending rental', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
