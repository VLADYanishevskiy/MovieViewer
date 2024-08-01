import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterSearch,
  setNameSearch,
} from "../features/searchType/searchTypeSlice";

const SearchTypeSwitch = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.searchType.type);

  return (
    <div className="flex justify-center mb-4">
      <div className="flex items-center">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            type === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => dispatch(setNameSearch())}
        >
          By Name
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            type === "filter"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => dispatch(setFilterSearch())}
        >
          By Filters
        </button>
      </div>
    </div>
  );
};

export default SearchTypeSwitch;
