function Search({ on_Click, on_Change, on_KeyDown }) {
  return (
    <div id="search_bar" className="w-[70%] flex items-center h-full relative">
      <input
        className="placeholder:text-gray text-black p-4 pr-[8%] w-full h-1/2 rounded-full bg-peach outline-none"
        type="text"
        placeholder={"Search..."}
        spellCheck="false"
        onChange={on_Change}
        onKeyDown={(e) => {
          on_KeyDown(e);
        }}
      />

      <button
        onClick={() => {
          on_Click();
        }}
        className="select-none absolute cursor-pointer right-0 rounded-full h-1/2 w-[10%] flex items-center justify-center duration-500"
      >
        <img src="./src/graphics/search.svg" />
      </button>
    </div>
  );
}

export default Search;
