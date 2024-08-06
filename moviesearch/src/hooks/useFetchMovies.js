import { useState, useEffect } from "react";
import { ApiKeys } from "../configs/ApiKeys"; // Adjust the import path as needed

const useFetchMovies = (movieIds) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ApiKeys.Token}`,
        },
      };

      try {
        const movieData = await Promise.all(
          movieIds.map(async (movieId) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
              options
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch movie with ID: ${movieId}`);
            }
            return response.json();
          })
        );
        setMovies(movieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieIds]);

  return { movies, loading, error };
};

export default useFetchMovies;
