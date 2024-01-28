import React, { useState } from "react";
import StoreCustomerModal from "../components/customersModal";

const CustomerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Customer Page</h1>
      <button onClick={openModal}>Open Modal</button>
      <StoreCustomerModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CustomerPage;
