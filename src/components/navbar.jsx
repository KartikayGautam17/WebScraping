import Search from "./navbar_components/search";
import Filter from "./navbar_components/filters";

function Navbar() {
  return (
    <div className="w-full bg-[--w-black] h-[15vh]">
      <img
        src="./src/graphics/list.svg"
        className="inline ml-[5%]  cursor-pointer"
      ></img>

      <div className="inline-flex w-[70%] h-full ml-[5%] p-2.5 justify-between items-center">
        <Search />
        <Filter />
      </div>
    </div>
  );
}
export default Navbar;
