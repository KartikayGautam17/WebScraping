import Search from "./navbar_components/search";
import Filter from "./navbar_components/filters";

function Navbar({
  on_Click,
  on_Change,
  on_KeyDown,
  Widgets,
  set_Widgets,
  fil,
  setFil,
}) {
  return (
    <div className="w-full bg-topaz h-[100px] sticky top-0 z-10">
      <div className="overflow-hidden inline-flex w-[90%] h-full ml-[2%] p-2.5 justify-start items-center gap-10">
        <Filter type={"Price"} fil={fil} setFil={setFil} />
        <Search
          // user_query={userQuery}
          on_Click={on_Click}
          on_Change={on_Change}
          on_KeyDown={on_KeyDown}
        />
        <div className="w-[25%] h-1/2 flex justify-between gap-3">
          <Filter
            type={"Ascending"}
            Widgets={Widgets}
            setWidgets={set_Widgets}
          />
          <Filter
            type={"Descending"}
            Widgets={Widgets}
            setWidgets={set_Widgets}
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
