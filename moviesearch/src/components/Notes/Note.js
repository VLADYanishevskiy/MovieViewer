import React, { useState } from "react";
import { editNote } from "../../features/notes/notesSlice";
import { useDispatch } from "react-redux";

const Note = ({ note, handleRemoveNote }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(note.text);
  const isEdited = note.text !== text;

  const handleEditNote = () => {
    if (text.trim() !== "") {
      dispatch(editNote({ noteId: note.id, newText: text }));
    }
  };

  return (
    <div className="flex mt-2 mb-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm"
        placeholder="Add a note"
      />
      <button
        disabled={!isEdited}
        onClick={handleEditNote}
        className={`ml-2 ${
          isEdited ? "bg-amber-700" : "bg-gray-700"
        } text-white font-bold p-2 rounded-lg shadow-sm`}
      >
        Edit
      </button>
      <button
        onClick={() => handleRemoveNote(note.id)}
        className="ml-2 bg-red-800 text-white font-bold p-2 rounded-lg shadow-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
