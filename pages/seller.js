import React from 'react';
import StoresModal from '../components/storesModal';
import {useState} from 'react'
import ProfileModal from '../components/profileModal';

const SellerPage = () => {
  const [open , setOpen] = useState(-1);
  const openModal = (id) => {
    setOpen(id);
  }
  return (
    <div>
      <h1>Seller Page</h1>
      <button className='button' onClick={() => openModal(0)}>Stores</button>
      <StoresModal isOpen={open === 0} onClose={() => setOpen(-1)} />
      <button className='button' onClick={() => openModal(1)}>Profile</button>
      <ProfileModal isOpen={open === 1} onClose={() => setOpen(-1)} />
    </div>
  );
};

export default SellerPage;
