import { createSlice } from "@reduxjs/toolkit";
import { NotesService } from "../../services/notesService";

const initialState = {
  notes: NotesService.get(),
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = NotesService.add(
        action.payload.movieId,
        action.payload.text
      );
      state.notes.push(note);
    },
    removeNote: (state, action) => {
      const noteId = action.payload;
      state.notes = state.notes.filter((n) => n.id !== noteId);
      NotesService.remove(noteId);
    },
    editNote: (state, action) => {
      const { noteId, newText } = action.payload;
      const note = state.notes.find((n) => n.id === noteId);
      if (note) {
        note.text = newText;
        NotesService.update(noteId, newText);
      }
    },
  },
});

export const { addNote, removeNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
