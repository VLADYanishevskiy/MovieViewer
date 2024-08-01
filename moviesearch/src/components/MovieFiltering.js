import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setDirector,
  setWatchedStatus,
} from "../features/filters/filtersSlice";
const MovieFiltering = () => {
  const categories = useSelector((state) => state.category.categories);
  const [categoryValue, setCategoryValue] = useState(1);
  const [directorValue, setDirectorValue] = useState("");
  const [watchedStatusValue, setWatchedStatusValue] = useState("All");
  const dispatch = useDispatch();

  const applyFilters = () => {
    dispatch(setCategory(categoryValue));
    dispatch(setDirector(directorValue));
    dispatch(setWatchedStatus(watchedStatusValue));
  };

  return (
    <div className="bg-slate-800 text-white p-4 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-lg font-medium mb-2">Category</label>
          <select
            onChange={(e) => setCategoryValue(e.target.value)}
            className="w-full p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm"
          >
            <option>All</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Director</label>
          <input
            onChange={(e) => setDirectorValue(e.target.value)}
            className="w-full p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Watched status
          </label>
          <select
            onChange={(e) => setWatchedStatusValue(e.target.value)}
            className="w-full p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm"
          >
            <option>All</option>
            <option>Unwatched</option>
            <option>Watched</option>
          </select>
        </div>
      </div>
      <button
        onClick={applyFilters}
        className="mt-4 w-full bg-cyan-800 text-white font-bold p-2 rounded-lg shadow-sm"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default MovieFiltering;
