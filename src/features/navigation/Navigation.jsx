import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

function Navigation() {
  return (
    <header className="w-screen sm:h-16 h-32 bg-stone-800 text-center flex flex-col sm:flex-row  justify-between items-center border-b-yellow-500 border-b-[3px]">
      <div className=" h-full w-full sm:w-min sm:px-0 ">
        <NavLink
          to={"/"}
          className={`${({ isActive }) =>
            isActive
              ? "active"
              : null} text-stone-300 text-xl md:text-2xl h-full flex items-center  justify-center px-8 gap-2 border-b-[1px] border-b-yellow-300 sm:border-none `}
        >
          {" "}
          <img src="../../../public/favicon-32x32.png" alt="logo" />
          MovieSaver
        </NavLink>
      </div>
      <nav className="flex h-full">
        <NavButton to={"/search"}>Search movie</NavButton>
        <NavButton to={"/watched"}>Watched movies</NavButton>
        <NavButton to={"/watchlist"}>Movies to Watch</NavButton>
      </nav>
    </header>
  );
}

export default Navigation;
