import Tile from "./result_tiles/tile";
import content_array from "./result_tiles/content_data_temp";

function ResultContainer() {
  return (
    <div className="p-10 gap-5 mt-5 grid grid-rows-2 grid-cols-4 w-[90%] absolute top-[15vh] border-2 min-h-[85vh] [row-gap:20px]">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
}

export default ResultContainer;
