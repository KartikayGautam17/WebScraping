import ContentArray from "./result_tiles/content_array";
import Tile from "./result_tiles/tile";
import NullResults from "./resultStates/nullRes";
import DefaultResults from "./resultStates/defaultRes";

function ResultContainer({ userQuery }) {
  if (userQuery === null || userQuery === "") {
    return <DefaultResults />;
  } else if (userQuery && ContentArray.length < 0) {
    return <NullResults />;
  } else {
    return (
      <div className="flex items-center justify-center relative">
        <div className="p-10 gap-5 mt-5 grid grid-rows-2 grid-cols-4 w-[90%] absolute top-[15vh] border-2 min-h-[85vh] [row-gap:20px]">
          <Tile sno={0} />
          <Tile sno={1} />
          <Tile sno={2} />
          <Tile sno={3} />
          <Tile sno={4} />
          <Tile sno={5} />
          <Tile sno={6} />
          <Tile sno={7} />
        </div>
      </div>
    );
  }
}

export default ResultContainer;
