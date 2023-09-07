import StarRating from "../../ui/StarRating";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import { useMovieList } from "../../context/MovieListContext";
import ListTemplate from "../../ui/ListTemplate";

export default function WatchlistDetails({ onClose, movieID }) {
  const [rating, setRating] = useState(0);
  const ref = useOutsideClick(onClose);

  const { removeMovieFromWatchlist, addToWatched } = useMovieList();

  const { data: movieDetails } = useMovieDetails(movieID);

  useEffect(() => {
    if (rating > 0) {
      movieDetails.rating = rating;
    }
  }, [rating, movieDetails]);

  const handleDelete = () => {
    removeMovieFromWatchlist(movieID);
    onClose();
  };

  const handleAddToWatched = () => {
    if (rating > 0) {
      removeMovieFromWatchlist(movieID);

      movieDetails.rating = rating;

      addToWatched(movieDetails);
      onClose();
    }
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

          {rating > 0 ? (
            <Button onClick={() => handleAddToWatched(movieDetails)}>
              Add to watched
            </Button>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-end gap-3">
          <Button onClick={handleDelete}>Delete from watchlist</Button>

          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </ListTemplate>
  );
}
