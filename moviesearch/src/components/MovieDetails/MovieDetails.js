import React, { useState } from "react";
import MovieExpandedPopup from "./MovieExpandedPopup";

const MovieDetails = ({ movie }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTextVisible((prev) => !prev);
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
        <MovieExpandedPopup movie={movie} closePopup={handleToggle} />
      )}
    </div>
  );
};

export default MovieDetails;
