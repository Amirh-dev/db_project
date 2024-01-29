import React, { useState, useEffect } from 'react';

function ActiveRentals() {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        async function fetchActiveRentals() {
            const response = await fetch('/api/seller/active-rentals');
            if (response.ok) {
                const data = await response.json();
                setRentals(data);
            }
        }

        fetchActiveRentals();
    }, []);

    return (
        <div>
            <h1>Active Rentals</h1>
            <ul>
                {rentals.map((rental) => (
                    <li key={rental.RentalID}>
                        {`Rental ID: ${rental.RentalID}, Movie ID: ${rental.MovieID}, User ID: ${rental.UserID}, Due Date: ${rental.DueDate}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActiveRentals;
