const WATCHED_MOVIES_KEY = "watched_movies";
const WATCH_LATER_MOVIES_KEY = "watch_later_movies";

export const MovieService = {
  Watched: {
    get: () => {
      const watchedMovies = localStorage.getItem(WATCHED_MOVIES_KEY);
      return watchedMovies ? JSON.parse(watchedMovies) : [];
    },
    add: (movieId) => {
      const watchedMovies = MovieService.Watched.get();
      if (!watchedMovies.includes(movieId)) {
        watchedMovies.push(movieId);
        localStorage.setItem(WATCHED_MOVIES_KEY, JSON.stringify(watchedMovies));
      }
    },
    remove: (movieId) => {
      let watchedMovies = MovieService.Watched.get();
      watchedMovies = watchedMovies.filter((id) => id !== movieId);
      localStorage.setItem(WATCHED_MOVIES_KEY, JSON.stringify(watchedMovies));
    },
    isWatched: (movieId) => {
      const watchedMovies = MovieService.Watched.get();
      return watchedMovies.includes(movieId);
    },
  },
  WatchLater: {
    get: () => {
      const watchLaterMovies = localStorage.getItem(WATCH_LATER_MOVIES_KEY);
      return watchLaterMovies ? JSON.parse(watchLaterMovies) : [];
    },
    add: (movieId) => {
      const watchLaterMovies = MovieService.WatchLater.get();
      if (!watchLaterMovies.includes(movieId)) {
        watchLaterMovies.push(movieId);
        localStorage.setItem(
          WATCH_LATER_MOVIES_KEY,
          JSON.stringify(watchLaterMovies)
        );
      }
    },
    remove: (movieId) => {
      let watchLaterMovies = MovieService.WatchLater.get();
      watchLaterMovies = watchLaterMovies.filter((id) => id !== movieId);
      localStorage.setItem(
        WATCH_LATER_MOVIES_KEY,
        JSON.stringify(watchLaterMovies)
      );
    },
    contains: (movieId) => {
      const watchLaterMovies = MovieService.WatchLater.get();
      return watchLaterMovies.includes(movieId);
    },
  },
};
