import React, { useEffect, useState } from 'react';

function TotalPayments() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('/api/seller/totalPayments')
            .then(response => response.json())
            .then(data => setPayments(data));
    }, []);

    return (
        <div>
            <h1>Total Payments</h1>
            <ul>
                {payments.map(payment => (
                    <li key={payment.StoreID}>Store {payment.StoreID}: ${payment.TotalPayments}</li>
                ))}
            </ul>
        </div>
    );
}

export default TotalPayments;
