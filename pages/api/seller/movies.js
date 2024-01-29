import { pool } from '../../../sql/client';

export default async function handler(req, res) {
    try {
        const query = `
            SELECT 
                Movies.MovieID,
                Movies.Title,
                COUNT(Rentals.MovieID) AS TotalRentals,
                AVG(MovieRatings.Rating) AS AverageRating,
                (SELECT COUNT(*) FROM Copies WHERE Copies.MovieID = Movies.MovieID) AS NumberOfCopies,
                SUM(CASE WHEN Rentals.ReturnDate > Rentals.DueDate THEN 1 ELSE 0 END) AS LateReturns
            FROM 
                Movies
            LEFT JOIN Rentals ON Movies.MovieID = Rentals.MovieID
            LEFT JOIN MovieRatings ON Movies.MovieID = MovieRatings.MovieID
            GROUP BY 
                Movies.MovieID;
        `;
        const result = await pool.query(query);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
