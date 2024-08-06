import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import filtersReducer from "../features/filters/filtersSlice";
import resultsReducer from "../features/results/resultsSlice";
import categoryReducer from "../features/category/categorySlice";
import searchTypeReducer from "../features/searchType/searchTypeSlice";
import watchedMoviesReducer from "../features/watchedMovies/watchedMoviesSlice";
import watchLaterReducer from "../features/watchLater/watchLaterSlice";
import apiReducer, { api } from "../features/api/api";
import notesSliceReducer from "../features/notes/notesSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    filters: filtersReducer,
    results: resultsReducer,
    category: categoryReducer,
    searchType: searchTypeReducer,
    watchedMovies: watchedMoviesReducer,
    watchLater: watchLaterReducer,
    notes: notesSliceReducer,
    [api.reducerPath]: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
