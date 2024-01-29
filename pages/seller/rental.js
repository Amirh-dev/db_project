import React, { useState } from 'react';
import axios from 'axios';

const RentalPage = () => {
    const [startRentalData, setStartRentalData] = useState({
        movieId: '',
        storeId: '',
        userId: '',
        rentalDate: '',
        dueDate: ''
    });

    const [endRentalData, setEndRentalData] = useState({
        rentalId: '',
        returnDate: ''
    });

    const handleStartRentalChange = (e) => {
        setStartRentalData({ ...startRentalData, [e.target.name]: e.target.value });
    };

    const handleEndRentalChange = (e) => {
        setEndRentalData({ ...endRentalData, [e.target.name]: e.target.value });
    };

    const handleStartRentalSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/seller/start-rental', startRentalData);
            console.log(response.data);
            // Handle success (e.g., show message, clear form)
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show error message)
        }
    };

    const handleEndRentalSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('/api/seller/end-rental', endRentalData);
            console.log(response.data);
            // Handle success (e.g., show message, clear form)
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <h1>Rental Management</h1>
            <div>
                <h2>Start Rental</h2>
                <form onSubmit={handleStartRentalSubmit}>
                    {/* Inputs for starting rental */}
                    <input type="text" name="movieId" placeholder="Movie ID" onChange={handleStartRentalChange} />
                    <input type="text" name="storeId" placeholder="Store ID" onChange={handleStartRentalChange} />
                    <input type="text" name="userId" placeholder="User ID" onChange={handleStartRentalChange} />
                    <input type="text" name="rentalDate" placeholder="Rental Date" onChange={handleStartRentalChange} />
                    <input type="text" name="dueDate" placeholder="Due Date" onChange={handleStartRentalChange} />
                    <button type="submit">Start Rental</button>
                </form>
            </div>

            <div>
                <h2>End Rental</h2>
                <form onSubmit={handleEndRentalSubmit}>
                    {/* Inputs for ending rental */}
                    <input type="text" name="rentalId" placeholder="Rental ID" onChange={handleEndRentalChange} />
                    <input type="text" name="returnDate" placeholder="Return Date" onChange={handleEndRentalChange} />
                    <button type="submit">End Rental</button>
                </form>
            </div>
        </div>
    );
};

export default RentalPage;
