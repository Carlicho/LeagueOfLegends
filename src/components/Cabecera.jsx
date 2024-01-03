import React from 'react';

const Cabecera = ({ searchText, setSearchText, onSearch }) => {
  return (
    <header className="alert bg-dark d-flex justify-content-sm-around ">
      <h5 className="text-light">League Of Legends PlayerSearcher</h5>
      <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      </div>
    </header>
  );
};

export default Cabecera;