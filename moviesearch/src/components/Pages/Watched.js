import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieDetails/MovieList";
import useFetchMovies from "../../hooks/useFetchMovies";

const Watched = () => {
  const watchedMovies = useSelector(
    (state) => state.watchedMovies.watchedMovies
  );
  const { movies, loading, error } = useFetchMovies(watchedMovies);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;

  const mapped = movies
    .filter((movie) => movie !== undefined)
    .map((m) => {
      return {
        adult: m.adult,
        backdrop_path: m.backdrop_path,
        genre_ids: m.genres.map((g) => g.id),
        id: m.id,
        original_language: m.original_language,
        original_title: m.original_title,
        overview: m.overview,
        popularity: m.popularity,
        poster_path: m.poster_path,
        release_date: m.release_date,
        title: m.title,
        video: m.video,
        vote_average: m.vote_average,
        vote_count: m.vote_count,
      };
    });

  return <MovieList title="Watched" movies={mapped} />;
};

export default Watched;
