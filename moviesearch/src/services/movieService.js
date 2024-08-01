const WATCHED_MOVIES_KEY = "watched_movies";

export const MovieService = {
  getWatchedMovies: () => {
    const watchedMovies = localStorage.getItem(WATCHED_MOVIES_KEY);
    return watchedMovies ? JSON.parse(watchedMovies) : [];
  },
  addWatchedMovie: (movieId) => {
    const watchedMovies = MovieService.getWatchedMovies();
    if (!watchedMovies.includes(movieId)) {
      watchedMovies.push(movieId);
      localStorage.setItem(WATCHED_MOVIES_KEY, JSON.stringify(watchedMovies));
    }
  },
  removeWatchedMovie: (movieId) => {
    let watchedMovies = MovieService.getWatchedMovies();
    watchedMovies = watchedMovies.filter((id) => id !== movieId);
    localStorage.setItem(WATCHED_MOVIES_KEY, JSON.stringify(watchedMovies));
  },
  isMovieWatched: (movieId) => {
    const watchedMovies = MovieService.getWatchedMovies();
    return watchedMovies.includes(movieId);
  },
};
