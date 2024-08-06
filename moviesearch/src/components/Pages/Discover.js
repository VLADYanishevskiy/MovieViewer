import React from "react";
import MovieSearch from "../FiltersAndSearch/MovieSearch";
import MovieFiltering from "../FiltersAndSearch/MovieFiltering";
import MovieSearchResult from "../FiltersAndSearch/MovieSearchResult";

const Discover = () => {
  return (
    <>
      <MovieSearch />
      <MovieFiltering />
      <MovieSearchResult />
    </>
  );
};

export default Discover;
