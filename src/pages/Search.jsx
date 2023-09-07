import { useEffect, useState } from "react";
import MovieList from "../features/movieSearch/MovieList";
import SearchInput from "../features/movieSearch/SearchInput";
import { useMovies } from "../hooks/useMovies";
import Spinner from "../ui/Spinner";

function Search() {
  const [movieTitle, setMovieTitle] = useState("");

  const { data: movies, isLoading, refetch } = useMovies(movieTitle);

  function handleChange(e) {
    setMovieTitle(e.target.value);
  }

  useEffect(() => {
    // When the movieTitle changes, trigger the refetch function
    refetch();
  }, [movieTitle, refetch]);

  return (
    <div className="bg-stone-900 w-full min-h-full  flex items-center justify-center">
      <div className="bg-stone-800 w-1/2 min-h-[30rem]   my-20 rounded-3xl flex flex-col items-center ">
        <div className="w-full h-28 bg-stone-600 rounded-t-3xl flex items-center justify-center border-b-[3px] border-b-yellow-500">
          <SearchInput onChange={handleChange} />
        </div>
        {isLoading ? <Spinner /> : <MovieList movies={movies?.Search || []} />}
      </div>
    </div>
  );
}

export default Search;
