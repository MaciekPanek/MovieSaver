import { useEffect, useState } from "react";
import StarRating from "../../ui/StarRating";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "../../ui/Button";
import { useMovieList } from "../../context/MovieListContext";
import ListTemplate from "../../ui/ListTemplate";

export default function MovieDetails({ onClose, movieID }) {
  const [rating, setRating] = useState(0);
  const ref = useOutsideClick(onClose);
  const { data: movieDetails } = useMovieDetails(movieID);

  const {
    watchlist,
    addToWatchlist,
    addToWatched,
    watched,
    removeMovieFromWatchlist,
  } = useMovieList();

  const isMovieInWatchlist = movieDetails
    ? watchlist.some((movie) => movie.imdbID === movieDetails.imdbID)
    : false;

  const isMovieInWatched = movieDetails
    ? watched.some((movie) => movie.imdbID === movieDetails.imdbID)
    : false;

  useEffect(() => {
    if (rating > 0) {
      movieDetails.rating = rating;
    }
  }, [rating, movieDetails]);

  function addMovie(movieDetails) {
    addToWatchlist(movieDetails);
    onClose();
  }

  const handleAddToWatched = () => {
    if (rating > 0) {
      movieDetails.rating = rating;
    }

    addToWatched(movieDetails);

    if (watchlist.some((movie) => movie.imdbID === movieDetails.imdbID)) {
      removeMovieFromWatchlist(movieDetails.imdbID);
    }

    onClose();
  };

  if (!movieDetails) return null;

  return (
    <ListTemplate movieDetails={movieDetails} ref={ref}>
      <div className=" justify-between flex">
        <div className="flex flex-col  gap-2">
          <div className="flex items-center gap-2">
            <span className="text-stone-700 italic">Rate</span>
            <StarRating maxRating={10} size={20} onSetRating={setRating} />
          </div>

          {isMovieInWatched ? (
            <Button disabled>Already in Watched</Button>
          ) : rating > 0 ? (
            <Button onClick={handleAddToWatched}>Add to watched</Button>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-end gap-3">
          {isMovieInWatchlist || isMovieInWatched ? (
            <Button disabled>{` ${
              isMovieInWatched ? "Added to watched" : "Already in watchlist"
            }`}</Button>
          ) : (
            <Button onClick={() => addMovie(movieDetails)}>
              Add to watch list
            </Button>
          )}

          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </ListTemplate>
  );
}
