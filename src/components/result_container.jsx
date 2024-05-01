import Tile from "./result_tiles/tile";
import DefaultResults from "./resultStates/defaultRes";
import { useState, useEffect } from "react";
import KickstartAmazonScraper from "../scrapers/Amazon_Kickstart";

function ResultContainer({ userQuery }) {
  if (userQuery === null || userQuery === "") {
    return <DefaultResults />;
  }
  let child_nodes = [];
  const [Widgets, setWidgets] = useState([]);
  let WidgetObject = [];
  useEffect(() => {
    KickstartAmazonScraper(userQuery).then((AmazonResults) => {
      for (let key = 0; key < 5; key += 1) {
        if (Object.hasOwnProperty.call(AmazonResults, key)) {
          const val = AmazonResults[key];
          console.log(val);
          WidgetObject.push(
            <Tile
              key={val.id}
              img={val.img}
              href={val.href}
              price={val.price}
              title={val.title}
            />
          );
        }
      }
      setWidgets(() => WidgetObject);
    });
  }, [userQuery]);

  return (
    <div className="flex items-center justify-center relative">
      <div className="bg-[--w-clayblack] p-10 gap-5 mt-5 mb-10 grid grid-rows-2 grid-cols-3 w-[90%] absolute top-[15vh] border-2 min-h-[85vh] [row-gap:20px]">
        {Widgets === Array(0) ? <div>Loading....</div> : Widgets}
      </div>
    </div>
  );
}

export default ResultContainer;
