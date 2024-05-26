import Search from "./navbar_components/search";
import Filter from "./navbar_components/filters";

function Navbar({ userQuery, on_Click, on_Change, on_KeyDown, show }) {
  return (
    <div className="w-full bg-[--w-black] h-[100px]">
      <div className="overflow-hidden inline-flex w-[90%] h-full ml-[2%] p-2.5 justify-start items-center gap-10">
        <div className="w-[12%] h-1/2 flex justify-between mr-5">
          <button className="w-full border-2 border-[--w-cyan] rounded-full text-center hover:bg-[rgba(102,252,241,0.8)] hover:text-white duration-500">
            Price
          </button>
        </div>
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
