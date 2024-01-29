// components/StoreCustomerModal.js

import React, { useState, useEffect } from "react";

const StoresModal = ({ isOpen, onClose }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetch("http://localhost:3000/api/stores")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
    
        <table className="table">
          <thead>
            <tr>
              <th>StoreID</th>
              <th>StoreName</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.StoreID}>
                <td>{item.StoreID}</td>
                <td>{item.StoreName}</td>
                <td>{item.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default StoresModal;




    