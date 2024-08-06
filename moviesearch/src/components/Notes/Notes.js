import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNote } from "../../features/notes/notesSlice";
import Note from "./Note";

const Notes = ({ movieId }) => {
  const allNotes = useSelector((state) => state.notes.notes);
  const [newNote, setNewNote] = useState("");
  const dispatch = useDispatch();
  const currentMovieNotes = allNotes.filter((n) => n.movieId === movieId);
  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      dispatch(addNote({ movieId, text: newNote }));
      setNewNote("");
    }
  };
  const handleRemoveNote = (noteId) => {
    dispatch(removeNote(noteId));
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Notes</h3>
      {currentMovieNotes.map((note) => (
        <Note key={note.id} note={note} handleRemoveNote={handleRemoveNote} />
      ))}

      <div className="flex">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="w-full p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm"
          placeholder="Add a note"
        />
        <button
          onClick={handleAddNote}
          className="ml-2 bg-cyan-800 text-white font-bold p-2 rounded-lg shadow-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Notes;
