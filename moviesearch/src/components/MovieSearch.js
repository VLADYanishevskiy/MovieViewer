import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../features/search/searchSlice";

const MovieSearch = () => {
  const [inputQuery, setInputQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setQuery(inputQuery));
  };

  return (
    <>
      <div className="flex justify-center mb-6 text-white">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full md:w-1/2 p-2 border bg-slate-800 border-gray-800 rounded-lg shadow-sm"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
        <button
          className="ml-2 bg-cyan-800 text-white p-2 rounded-lg shadow-sm"
          onClick={handleSearch}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default MovieSearch;
