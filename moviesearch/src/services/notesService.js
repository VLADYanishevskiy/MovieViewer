import { generateUUID } from "./uuidService";

const NOTES_KEY = "notes";

export const NotesService = {
  get: () => {
    const notes = localStorage.getItem(NOTES_KEY);
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
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));

    return note;
  },
  remove: (noteId) => {
    let notes = NotesService.get();
    notes = notes.filter((note) => note.id !== noteId);
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  },
  update: (noteId, newText) => {
    let notes = NotesService.get();
    notes = notes.map((note) =>
      note.id === noteId ? { ...note, text: newText } : note
    );
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  },
};
