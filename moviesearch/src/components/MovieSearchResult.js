import React, { useEffect } from "react";
import { fetchResults } from "../features/results/resultsSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import PageEnumeration from "./PageEnumeration";
import {
  goToNextPage,
  goToPage,
  goToPreviousPage,
} from "../features/search/searchSlice";
import { filterData } from "../services/filterService";

const MovieSearchResult = () => {
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.searchType.type);
  const query = useSelector((state) => state.search.query);
  const page = useSelector((state) => state.search.page);
  const filters = useSelector((state) => state.filters);
  const data = useSelector((state) => state.results.data);

  useEffect(() => {
    dispatch(fetchResults({ query, filters, page: page }));
  }, [query, searchType, page, filters]);

  const filteredData = filterData({ data, filters });

  return (
    <>
      {filteredData &&
        filteredData.results &&
        filteredData.results.length > 0 && (
          <MovieList title="Found movies" movies={filteredData.results} />
        )}
      {filteredData &&
        filteredData.results &&
        filteredData.results.length > 0 && (
          <PageEnumeration
            currentPage={filteredData.page}
            totalPageCount={filteredData.total_pages}
            goToNext={() => dispatch(goToNextPage())}
            goToPrevious={() => dispatch(goToPreviousPage())}
            goToNumber={(number) => dispatch(goToPage(number))}
          />
        )}
    </>
  );
};

export default MovieSearchResult;
