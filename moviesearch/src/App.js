import "./App.css";
import MovieSearch from "./components/MovieSearch";
import MovieFiltering from "./components/MovieFiltering";
import MovieSearchResult from "./components/MovieSearchResult";
import CategorieLoader from "./components/CategorieLoader";
import SearchTypeSwitch from "./components/SearchTypeSwitch";
import { useSelector } from "react-redux";

function App() {
  //const type = useSelector((state) => state.searchType.type);

  return (
    <>
      <CategorieLoader />
      <div className="bg-slate-900 container mx-auto p-4 ">
        {/*<SearchTypeSwitch />*/}
        {/*type === "name" && <MovieSearch />*/}
        {/*type === "filter" && <MovieFiltering />*/}
        <MovieSearch />
        <MovieFiltering />
        <MovieSearchResult />
      </div>
    </>
  );
}

export default App;
