import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "../../ui/Button";
import { useMovieList } from "../../context/MovieListContext";
import ListTemplate from "../../ui/ListTemplate";

export default function WatchlistDetails({ onClose, movieID }) {
  const ref = useOutsideClick(onClose);

  const { removeMovieFromWatched } = useMovieList();
  const { data: movieDetails } = useMovieDetails(movieID);

  const handleDelete = () => {
    removeMovieFromWatched(movieID);
    onClose();
  };

  if (!movieDetails) return null;

  return (
    <ListTemplate movieDetails={movieDetails} ref={ref}>
      <div className="flex items-end gap-3 justify-end">
        <Button onClick={handleDelete}>Delete from watched</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </ListTemplate>
  );
}
