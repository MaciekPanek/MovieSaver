import { useMovieList } from "../context/MovieListContext";
import Watchlist from "../features/moviesToWatch/Watchlist";
import EmptyList from "../ui/EmptyList";

function MoviesToWatch() {
  const { watchlist } = useMovieList();
  if (!watchlist) return null;

  if (watchlist.length === 0)
    return <EmptyList>You are yet to add movies to this list.🧐</EmptyList>;

  return (
    <main className="bg-stone-900 w-full min-h-full  flex items-center justify-center">
      <div className="bg-stone-800 w-full md:w-3/4 2xl:w-1/2  min-h-[30rem]   md:my-20 md:rounded-3xl flex flex-col items-center ">
        <div className="border-b-[3px] border-b-yellow-500 w-full text-center py-3 ">
          <span className="text-stone-400 text-3xl ">
            Your list of movies to watch.
          </span>
        </div>
        <Watchlist movies={watchlist ?? []} />
      </div>
    </main>
  );
}

export default MoviesToWatch;
