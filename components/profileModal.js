import React from 'react';
import { useState, useEffect } from 'react';

const ProfileModal = ({ isOpen, onClose }) => {
  const [data, setData] = useState([]);
  const [updatedUser, setUpdatedUser] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
  });

  useEffect(() => {
    if (isOpen) {
      fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ id: '1' }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.error('Error:', error));
    }
  }, [isOpen]);

  useEffect(() => {
    if (data.length === 0) return;
    setUpdatedUser({
      FirstName: data[0].FirstName,
      LastName: data[0].LastName,
      Email: data[0].Email,
    });
  }, [data]);

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div
        className="modal-content"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="email"
          value={updatedUser.FirstName}
          onChange={(e) => {
            setUpdatedUser({ ...updatedUser, FirstName: e.target.value });
          }}
        />
        <input
          className="input"
          type="text"
          placeholder="LastName"
          value={updatedUser.LastName}
          onChange={(e) => {
            setUpdatedUser({ ...updatedUser, LastName: e.target.value });
          }}
        />
        <input
          className="input"
          type="email"
          placeholder="FirstName"
          value={updatedUser.Email}
          onChange={(e) => {
            setUpdatedUser({ ...updatedUser, Email: e.target.value });
          }}
        />
        <button
          className="button"
          onClick={() => {
            fetch('http://localhost:3000/api/users', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              

              body: JSON.stringify({ ...updatedUser, UserID: data[0].UserID }),
            })
              .then((response) => response.json())

              .catch((error) => console.error('Error:', error));
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
