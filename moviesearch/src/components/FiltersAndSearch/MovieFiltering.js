import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setMinYear,
  setMaxYear,
  setWatchedStatus,
} from "../../features/filters/filtersSlice";
const MovieFiltering = () => {
  const categories = useSelector((state) => state.category.categories);
  const [categoryValue, setCategoryValue] = useState(-1);
  const [minYearValue, setMinYearValue] = useState(0);
  const [maxYearValue, setMaxYearValue] = useState(0);
  const [watchedStatusValue, setWatchedStatusValue] = useState("All");
  const dispatch = useDispatch();

  const applyFilters = () => {
    dispatch(setCategory(categoryValue));
    dispatch(setMinYear(minYearValue));
    dispatch(setMaxYear(maxYearValue));
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
            <option value={-1}>All</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Year Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min Year"
              className="w-1/2 p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm"
              value={minYearValue}
              onChange={(e) => setMinYearValue(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Year"
              className="w-1/2 p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm"
              value={maxYearValue}
              onChange={(e) => setMaxYearValue(e.target.value)}
            />
          </div>
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
