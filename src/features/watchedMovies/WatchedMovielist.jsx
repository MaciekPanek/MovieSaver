import WatchedModal from "./WatchedModal";

function WatchedMovielist({ movies }) {
  return (
    <ul className={`w-full px-10 `}>
      {movies.map((movie) => (
        <li
          key={movie.imdbID}
          className="flex items-start justify-between py-3  border-b last:border-b-0 border-yellow-200 min-h-[150px] "
        >
          <div className="flex items-start justify-start gap-5">
            <div className="">
              <img src={movie.Poster} className="w-20 " />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-stone-400 text-2xl">
                {movie.Title}
                <span className="text-sm"> ({movie.Type})</span>
              </span>
              <span className="text-stone-400 text-2xl">🗓️ {movie.Year} </span>
              <span className="text-stone-400 text-2xl">
                Your rating: ⭐️ {movie.rating}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center min-h-[120px] ">
            <WatchedModal movieID={movie.imdbID} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default WatchedMovielist;
