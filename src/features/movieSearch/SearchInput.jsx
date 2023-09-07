function SearchInput({ onChange }) {
  return (
    <input
      className="w-2/3 h-12 rounded-full appearance-none bg-stone-400 placeholder:text-stone-500 px-5 font-medium focus:outline-none caret-stone-600 text-stone-600 mr-5 focus:outline-[3px] focus:outline-yellow-500"
      placeholder="Search movie Title..."
      onChange={onChange}
    />
  );
}

export default SearchInput;
