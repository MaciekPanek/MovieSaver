import { useMovieList } from "../context/MovieListContext";
import WatchedMovielist from "../features/watchedMovies/WatchedMovielist";
import EmptyList from "../ui/EmptyList";

function WatchedMovies() {
  const { watched } = useMovieList();

  if (!watched) return null;

  if (watched.length === 0)
    return <EmptyList>You are yet to add movies to this list.🧐</EmptyList>;

  return (
    <main className="bg-stone-900 w-full min-h-full  flex items-center justify-center">
      <div className="bg-stone-800 w-full md:w-3/4 2xl:w-1/2  min-h-[30rem]   md:my-20 md:rounded-3xl flex flex-col items-center ">
        <div className="border-b-[3px] border-b-yellow-500 w-full text-center py-3 ">
          <span className="text-stone-400 text-3xl ">
            Your list of watched movies.
          </span>
        </div>
        <WatchedMovielist movies={watched} />
      </div>
    </main>
  );
}

export default WatchedMovies;
