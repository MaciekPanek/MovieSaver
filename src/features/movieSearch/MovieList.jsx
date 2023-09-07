import ListItem from "../../ui/ListItem";
import MovieDetailsModal from "./MovieDetailsModal";

function MovieList({ movies }) {
  if (movies.length === 0)
    return (
      <span className="text-3xl text-stone-400 my-auto">
        Start searching your desired movie or Tvs 👆
      </span>
    );

  return (
    <ul className={`w-full px-10 `}>
      {movies.map((movie) => (
        <ListItem movie={movie} key={movie.imdbID}>
          <MovieDetailsModal movieID={movie.imdbID} />
        </ListItem>
      ))}
    </ul>
  );
}

export default MovieList;
