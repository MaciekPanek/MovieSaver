import { Link } from "react-router-dom";

function EmptyList({ children }) {
  return (
    <div className="bg-stone-900 w-full min-h-full  flex items-center justify-center">
      <div className="bg-stone-800 w-1/2 h-[300px] rounded-3xl flex flex-col items-center ">
        <div className="h-1/2 flex items-center justify-center ">
          <span className="text-stone-400 text-3xl ">{children}</span>
        </div>
        <div className="h-1/2 flex justify-center items-start ">
          <Link
            to={"/search"}
            className="bg-yellow-500 px-7 py-3 rounded-full text-stone-800 text-lg hover:scale-105 hover:bg-yellow-600 transition-all duration-300 "
          >
            Search movies or Tvs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyList;
