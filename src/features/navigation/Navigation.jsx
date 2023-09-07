import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

function Navigation() {
  return (
    <div className="w-screen h-16 bg-stone-800 text-center flex justify-between items-center border-b-yellow-500 border-b-[3px]">
      <div className=" h-full ">
        <NavLink
          to={"/"}
          className={`${({ isActive }) =>
            isActive
              ? "active"
              : null} text-stone-300 text-xl h-full flex items-center  justify-center px-4 gap-2 `}
        >
          {" "}
          <img src="/favicon-32x32.png" alt="logo" />
          MovieSaver
        </NavLink>
      </div>
      <div className="flex h-full">
        <NavButton to={"/search"}>Search movie</NavButton>
        <NavButton to={"/watched"}>Watched movies</NavButton>
        <NavButton to={"/watchlist"}>Movies to Watch</NavButton>
      </div>
    </div>
  );
}

export default Navigation;
