import React from "react";
import MovieDetails from "./MovieDetails";

const MovieList = ({ title, movies }) => {
  if (!movies) return <></>;

  return (
    <>
      <div className="text-white">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {movies.map((movie, index) => (
            <MovieDetails key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
