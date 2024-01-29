// components/CustomersList.js
import React, { useState, useEffect } from "react";

function CustomersList({ managerId }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      const response = await fetch(
        `/api/seller/customers?managerId=${managerId}`
      );
      const data = await response.json();
      setCustomers(data.customers);
    }

    fetchCustomers();
  }, [managerId]);

  return (
    <div>
      <h1>Customers List</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.UserID}>
            {customer.FirstName} {customer.LastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomersList;
