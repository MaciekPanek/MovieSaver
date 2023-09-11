import { NavLink } from "react-router-dom";

function NavButton({ children, to }) {
  return (
    <NavLink
      to={to}
      className={`${({ isActive }) =>
        isActive
          ? "active"
          : null} text-stone-300 text-base  h-full flex items-center  justify-center sm:px-4 px-4 md:text-xl `}
    >
      <span>{children}</span>
    </NavLink>
  );
}

export default NavButton;
