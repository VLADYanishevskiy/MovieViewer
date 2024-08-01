import { createSlice } from "@reduxjs/toolkit";
import { MovieService } from "../../services/movieService";

const initialState = {
  watchedMovies: MovieService.getWatchedMovies(),
};

console.log(MovieService);

const watchedMoviesSlice = createSlice({
  name: "watchedMovies",
  initialState,
  reducers: {
    addWatchedMovie: (state, action) => {
      const movieId = action.payload;
      if (!state.watchedMovies.includes(movieId)) {
        state.watchedMovies.push(movieId);
        MovieService.addWatchedMovie(movieId);
      }
    },
    removeWatchedMovie: (state, action) => {
      const movieId = action.payload;
      state.watchedMovies = state.watchedMovies.filter((id) => id !== movieId);
      MovieService.removeWatchedMovie(movieId);
    },
  },
});

export const { addWatchedMovie, removeWatchedMovie } =
  watchedMoviesSlice.actions;
export default watchedMoviesSlice.reducer;
