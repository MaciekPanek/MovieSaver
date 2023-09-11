import React from "react";

function ListTemplate({ movieDetails, children }, ref) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className=" w-[666px] lg:w-[62rem] 2xl:h-[30rem] bg-stone-400 flex p-3 gap-5  rounded-3xl border-b-[3px] border-b-yellow-500"
        ref={ref}
      >
        <img
          src={movieDetails.Poster}
          className=" rounded-3xl hidden md:inline "
        />
        <div className="md:flex w-full  flex-col justify-between col-span-2">
          <div className="flex flex-col">
            <span className="text-3xl font-semibold text-stone-600 italic  ">
              {movieDetails.Title}{" "}
              <span className="text-base ">({movieDetails.Runtime})</span>
            </span>
            <span className="text-center py-5 italic md:text-lg text-stone-700">
              {movieDetails.Plot}
            </span>
            <span className="text-stone-700 italic">
              👨‍👧‍👦 {movieDetails.Actors}
            </span>
            <span className="text-stone-700 italic">
              🎬 {movieDetails.Genre}
            </span>
            <span className="text-stone-700 italic">
              🗓️ {movieDetails.Released}
            </span>
            <span className="text-stone-700 italic">
              ⭐️ {movieDetails.imdbRating} IMDb rating
            </span>
            <span className="text-stone-700 italic">
              👤 {movieDetails.imdbVotes} Votes
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(ListTemplate);
