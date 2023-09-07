import ListItem from "../../ui/ListItem";
import WatchlistModal from "./WatchlistModal";

function Watchlist({ movies }) {
  return (
    <ul className={`w-full px-10 `}>
      {movies.map((movie) => (
        <ListItem movie={movie} key={movie.imdbID}>
          <WatchlistModal movieID={movie.imdbID} />
        </ListItem>
      ))}
    </ul>
  );
}

export default Watchlist;
