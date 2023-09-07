import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const MovieListContext = createContext();

function MovieDetailsProvider({ children }) {
  const [watchlist, setWatchlist] = useLocalStorageState([], "watchlist");
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const addToWatched = (movie) => {
    setWatched([...watched, movie]);
  };

  const removeMovieFromWatchlist = (movieID) => {
    const updatedWatchlist = watchlist.filter(
      (movie) => movie.imdbID !== movieID
    );
    setWatchlist(updatedWatchlist);
  };

  const removeMovieFromWatched = (movieID) => {
    const updatedWatched = watched.filter((movie) => movie.imdbID !== movieID);
    setWatched(updatedWatched);
  };

  return (
    <MovieListContext.Provider
      value={{
        watchlist,
        watched,
        addToWatchlist,
        removeMovieFromWatchlist,
        addToWatched,
        removeMovieFromWatched,
      }}
    >
      {children}
    </MovieListContext.Provider>
  );
}

const useMovieList = () => {
  const context = useContext(MovieListContext);
  if (!context) {
    throw new Error("useMovieList must be used within a MovieListProvider");
  }
  return context;
};

export { MovieDetailsProvider, useMovieList };
