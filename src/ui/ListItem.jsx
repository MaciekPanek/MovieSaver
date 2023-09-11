function ListItem({ movie, children }) {
  return (
    <li
      key={movie.imdbID}
      className="flex items-start justify-between py-3  border-b last:border-b-0 border-yellow-200  sm:flex-row flex-col md:min-h-[150px] "
    >
      <div className="flex items-start justify-start gap-5">
        <div className="min-w-max">
          <img src={movie.Poster} className=" w-16 md:w-20 " />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-stone-400 md:text-xl lg:text-2xl text-lg">
            {movie.Title}
            <span className="text-sm"> ({movie.Type})</span>
          </span>
          <span className="text-stone-500 md:text-2xl">🗓️ {movie.Year} </span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full sm:w-max py-4   sm:min-h-[120px] min-w-max ">
        {children}
      </div>
    </li>
  );
}

export default ListItem;
