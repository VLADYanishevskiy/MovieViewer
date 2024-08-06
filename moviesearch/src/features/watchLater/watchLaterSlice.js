import { createSlice } from "@reduxjs/toolkit";
import { MovieService } from "../../services/movieService";

const initialState = {
  all: MovieService.WatchLater.get(),
};

const watchedMoviesSlice = createSlice({
  name: "watchLaterMovies",
  initialState,
  reducers: {
    addToWatchLater: (state, action) => {
      const movieId = action.payload;
      if (!state.all.includes(movieId)) {
        state.all.push(movieId);
        MovieService.WatchLater.add(movieId);
      }
    },
    removeFromWatchLater: (state, action) => {
      const movieId = action.payload;
      state.all = state.all.filter((id) => id !== movieId);
      MovieService.WatchLater.remove(movieId);
    },
  },
});

export const { addToWatchLater, removeFromWatchLater } =
  watchedMoviesSlice.actions;
export default watchedMoviesSlice.reducer;
