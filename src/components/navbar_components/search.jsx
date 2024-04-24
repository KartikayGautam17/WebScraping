function Search() {
  return (
    <div className="w-[70%] flex items-center h-full relative">
      <input
        className="placeholder:text-[--w-clayblack] text-[--w-clayblack] p-4 pr-[8%] w-full h-1/2 rounded-full bg-[white] outline-none"
        type="text"
        placeholder="Search..."
      />
      <div className="absolute cursor-pointer right-0 rounded-full h-1/2 w-[10%] flex items-center justify-center bg-[--w-cyan] hover:w-1/6 duration-500">
        <img src="./src/graphics/search.svg" />
      </div>
    </div>
  );
}

export default Search;
