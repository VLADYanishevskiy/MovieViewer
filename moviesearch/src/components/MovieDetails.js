import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addWatchedMovie,
  removeWatchedMovie,
} from "../features/watchedMovies/watchedMoviesSlice";

const MovieDetails = ({ movie }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const categories = useSelector((state) => state.category.categories);
  const categoriesText = categories
    ? movie.genre_ids.map(
        (categoryId) => categories.find((c) => c.id == categoryId).name
      )
    : [];

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTextVisible((prev) => !prev);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote.trim()]);
      setNewNote("");
    }
  };

  const dispatch = useDispatch();
  const watchedMovies = useSelector(
    (state) => state.watchedMovies.watchedMovies
  );
  const isWatched = watchedMovies.includes(movie.id);

  const handleToggleWatched = () => {
    if (isWatched) {
      dispatch(removeWatchedMovie(movie.id));
    } else {
      dispatch(addWatchedMovie(movie.id));
    }
  };

  return (
    <div className="bg-slate-800 p-2 rounded-lg shadow-sm cursor-pointer">
      <div
        className="relative w-full pb-[150%] mb-4 rounded-lg overflow-hidden"
        onClick={handleToggle}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Movie Poster"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      {isTextVisible && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                <div className="relative pl-6 pt-6 pr-6 pb-3 flex-auto">
                  <div className="bg-gray-700 shadow-lg rounded-lg flex max-w-4xl">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="Movie poster showing a dramatic scene with the main characters"
                      className="w-1/3 rounded-l-lg"
                    />
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">
                          {movie.title}
                        </h2>
                        <p className="text-white mb-4">{movie.overview}</p>
                        <p className="text-white mb-2">
                          <strong>Average vote:</strong> {movie.vote_average}
                        </p>
                      </div>
                      <div>
                        {categoriesText.map((c, i) => (
                          <div key={i} className="pr-2 inline">
                            <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                              {c}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div
                          className={
                            "movie rounded-full text-center bg-opacity-55" +
                            (isWatched ? " bg-red-500" : " bg-cyan-600")
                          }
                        >
                          <button onClick={handleToggleWatched}>
                            {isWatched
                              ? "Unmark as Watched"
                              : "Mark as Watched"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pl-6 pr-6 pb-3 pt-3 flex-auto">
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Notes</h3>
                    {notes.map((note, index) => (
                      <div key={index} className="flex mt-2 mb-2">
                        <p className="w-full p-2 border bg-slate-800 border-gray-950 rounded-lg shadow-sm">
                          {note}
                        </p>
                        <button
                          onClick={handleAddNote}
                          className="ml-2 bg-amber-700 text-white font-bold p-2 rounded-lg shadow-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={handleAddNote}
                          className="ml-2 bg-red-800 text-white font-bold p-2 rounded-lg shadow-sm"
                        >
                          Delete
                        </button>
                      </div>
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
                        Add Note
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleToggle}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
