import Tile from "./result_tiles/tile";
import DefaultResults from "./resultStates/defaultRes";
import { useState, useEffect } from "react";
import KickstartAmazonScraper from "../scrapers/Amazon_Kickstart";
import A from "./result_tiles/content_array";

function ResultContainer({ userQuery, btnPress }) {
  if (userQuery === null || userQuery === "") {
    return <DefaultResults />;
  }
  const [Widgets, setWidgets] = useState("..Loading..");

  let WidgetObject = [];
  useEffect(() => {
    setWidgets("..Loading..");
    KickstartAmazonScraper(userQuery).then((AmazonResults) => {
      //const AmazonResults = A;
      for (let key = 0; key < 10; key += 1) {
        if (Object.hasOwnProperty.call(AmazonResults, key)) {
          const val = AmazonResults[key];
          let fine_title = val.title;
          if (val.title.length > 10) {
            fine_title = val.title.slice(0, val.title.length - 3) + "...";
          }
          WidgetObject.push(
            <Tile
              key={val.id}
              img={val.img}
              href={val.href}
              price={val.price}
              title={fine_title}
            />
          );
        }
      }
      setWidgets(() => WidgetObject);
    });
  }, [btnPress]);

  return (
    <div className="bg-[--w--clayblack] flex items-center justify-center relative">
      <div className="bg-[--w-shadecyan] p-10 gap-5 mt-5 mb-10 grid grid-rows-3 grid-cols-5 w-[90%] border-2 min-h-[85vh] [row-gap:20px]">
        {Widgets}
      </div>
    </div>
  );
}

export default ResultContainer;
