import React, { useState } from 'react';
import axios from 'axios';

function ReserveMovie() {
    const [userId, setUserId] = useState('');
    const [movieId, setMovieId] = useState('');
    const [storeId, setStoreId] = useState('');

    const handleReserve = async () => {
        try {
            const response = await axios.post('/api/seller/reserve', { userId, movieId, storeId });
            console.log(response.data);
            alert('Reservation successful');
        } catch (error) {
            console.error(error);
            alert('Error in reservation');
        }
    };

    return (
        <div>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
            <input type="text" value={movieId} onChange={(e) => setMovieId(e.target.value)} placeholder="Movie ID" />
            <input type="text" value={storeId} onChange={(e) => setStoreId(e.target.value)} placeholder="Store ID" />
            <button onClick={handleReserve}>Reserve Movie</button>
        </div>
    );
}

export default ReserveMovie;
