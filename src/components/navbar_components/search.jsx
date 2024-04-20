function Search() {
  return (
    <div className="w-[70%] flex items-center h-full">
      <input
        className="placeholder:text-[--w-clayblack] text-[--w-clayblack] p-4 w-full h-1/2 rounded-full bg-[white] outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
