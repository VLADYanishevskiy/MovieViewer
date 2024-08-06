import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWatchedMovie,
  removeWatchedMovie,
} from "../../features/watchedMovies/watchedMoviesSlice";
import Notes from "../Notes/Notes";
import { FaRegClock, FaClock } from "react-icons/fa";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../features/watchLater/watchLaterSlice";

const MovieExpandedPopup = ({ closePopup, movie }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const watchedMovies = useSelector(
    (state) => state.watchedMovies.watchedMovies
  );
  const watchLaterMovies = useSelector((state) => state.watchLater.all);
  const categoriesText = categories
    ? movie.genre_ids.map(
        (categoryId) => categories.find((c) => c.id === categoryId).name
      )
    : [];
  const isWatched = watchedMovies.includes(movie.id);
  const isInWatchLater = watchLaterMovies.includes(movie.id);

  const handleToggleWatched = () => {
    if (isWatched) {
      dispatch(removeWatchedMovie(movie.id));
    } else {
      dispatch(addWatchedMovie(movie.id));
    }
  };

  const handleIconClick = () => {
    if (isInWatchLater) {
      dispatch(removeFromWatchLater(movie.id));
    } else {
      dispatch(addToWatchLater(movie.id));
    }
  };

  return (
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
                    <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
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

                  <div className="bg-white h-0.5" />
                  <div>
                    <div
                      className={
                        "movie  text-center  flex items-center justify-between "
                      }
                    >
                      <button
                        onClick={handleToggleWatched}
                        className={
                          "mr-4 px-4 py-2 bg-opacity-55 rounded-full" +
                          (isWatched ? " bg-red-500" : " bg-cyan-600")
                        }
                      >
                        {isWatched ? "Unmark as Watched" : "Mark as Watched"}
                      </button>
                      <div
                        className="flex items-center justify-center mr-1"
                        onClick={handleIconClick}
                      >
                        {isInWatchLater ? (
                          <FaClock className="text-blue-500 text-xl cursor-pointer" />
                        ) : (
                          <FaRegClock className="text-gray-500 text-xl cursor-pointer" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-6 pr-6 pb-3 pt-3 flex-auto">
              <Notes movieId={movie.id} />
            </div>
            <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default MovieExpandedPopup;
