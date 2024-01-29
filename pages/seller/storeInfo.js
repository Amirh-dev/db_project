import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StoreInfo = ({ storeId }) => {
    const [store, setStore] = useState(null);

    useEffect(() => {
        axios.get(`/api/seller/${storeId}`)
            .then(res => setStore(res.data))
            .catch(err => console.error(err));
    }, [storeId]);

    return (
        <div>
            {store && (
                <div>
                    <h1>{store.StoreName}</h1>
                    <p>{store.Address}</p>
                </div>
            )}
        </div>
    );
};

export default StoreInfo;
