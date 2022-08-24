import React from "react";

const Searcher = ({ placeholder, handleSearch }) => {
  return (
    <div className="row m-1 py-3">
      <input
        type="text"
        className="form-control border py-2"
        onChange={handleSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Searcher;
