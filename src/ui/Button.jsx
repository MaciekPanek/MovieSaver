function Button({ onClick, children, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className=" bg-yellow-400 rounded-full md:px-8 px-4 py-2 text-sm lg:text-base text-stone-700 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default Button;
