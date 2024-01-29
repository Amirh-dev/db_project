import React, { useState, useEffect } from 'react';

const MoviesModal = ({ isOpen, onClose }) => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetch(`http://localhost:3000/api/movies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword: keyword }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [keyword, isOpen]);

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
          placeholder="search"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <table className="table">
          <thead>
            <tr>
              <th>MovieID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.MovieID}>
                <td>{item.MovieID}</td>
                <td>{item.Title}</td>
                <td>{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoviesModal;
