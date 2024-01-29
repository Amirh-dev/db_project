import React, { useState } from 'react';
import StoresModal from '../components/storesModal';

import ProfileModal from '../components/profileModal';
import MoviesModal from '../components/moviesModal';

const CustomerPage = () => {
  const [open, setOpen] = useState(-1);
  const openModal = (id) => {
    setOpen(id);
  };
  const closeModal = () => {
    setOpen(-1);
  };

  return (
    <div>
      <h1>Customer Page</h1>
      <button className="button" onClick={() => openModal(0)}>
        Stores
      </button>
      <StoresModal isOpen={open === 0} onClose={() => closeModal()} />
      <button className="button" onClick={() => openModal(1)}>
        Profile
      </button>
      <ProfileModal isOpen={open === 1} onClose={() => closeModal()} />
      <button className="button" onClick={() => openModal(2)}>
        Movies
      </button>
      <MoviesModal isOpen={open === 2} onClose={() => closeModal()} />
    </div>
  );
};

export default CustomerPage;
