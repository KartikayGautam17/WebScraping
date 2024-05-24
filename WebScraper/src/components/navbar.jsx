import Search from "./navbar_components/search";
import Filter from "./navbar_components/filters";

function Navbar({ userQuery, on_Click, on_Change, on_KeyDown }) {
  return (
    <div className="w-full bg-[--w-black] h-[15vh]">
      <img
        src="./src/graphics/list.svg"
        className="inline ml-[5%]  cursor-pointer"
      ></img>

      <div className="inline-flex w-[70%] h-full ml-[5%] p-2.5 justify-between items-center">
        <Search
          // user_query={userQuery}
          on_Click={on_Click}
          on_Change={on_Change}
          on_KeyDown={on_KeyDown}
        />
        <Filter />
      </div>
    </div>
  );
}
export default Navbar;
