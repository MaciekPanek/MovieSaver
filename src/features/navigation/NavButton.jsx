import { NavLink } from "react-router-dom";

function NavButton({ children, to }) {
  return (
    <NavLink
      to={to}
      className={`${({ isActive }) =>
        isActive
          ? "active"
          : null} text-stone-300 text-xl h-full flex items-center  justify-center px-4 `}
    >
      <span>{children}</span>
    </NavLink>
  );
}

export default NavButton;
