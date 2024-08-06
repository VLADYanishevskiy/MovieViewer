const RATINGS_KEY = "rating";

export const NotesService = {
  get: () => {
    const notes = localStorage.getItem(RATINGS);
    return notes ? JSON.parse(notes) : [];
  },
  add: (movieId, text) => {
    const uuid = generateUUID();
    const notes = NotesService.get();
    const note = Object.freeze({
      id: uuid,
      movieId,
      text,
    });

    notes.push(note);
    localStorage.setItem(RATINGS, JSON.stringify(notes));
  },
  remove: (noteId) => {
    let watchedMovies = MovieService.Watched.get();
    watchedMovies = watchedMovies.filter((id) => id !== movieId);
    localStorage.setItem(RATINGS, JSON.stringify(watchedMovies));
  },
};
