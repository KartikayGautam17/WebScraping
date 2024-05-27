import Tile from "./result_tiles/tile";
import DefaultResults from "./resultStates/defaultRes";
import { useState, useEffect } from "react";
import KickstartFlipkartScraper from "../scrapers/Flipkart_Kickstart";
import KickstartAmazonScraper from "../scrapers/Amazon_Kickstart";
import A from "./result_tiles/content_array";

function ResultContainer({ userQuery, btnPress, Widgets, setWidgets }) {
  if (userQuery === null || userQuery === "") {
    return <DefaultResults />;
  }

  let WidgetObject = [];
  function FineTitle(title, n = 70) {
    let fine_title = title;
    if (title.length > n) {
      fine_title = title.slice(0, n - 3) + "...";
    }
    return fine_title;
  }
  useEffect(() => {
    setWidgets(["..Scraping Amazon Results.."]);
    KickstartAmazonScraper(userQuery).then((AmazonResults) => {
      for (let key = 0; key < 10; key += 1) {
        if (Object.hasOwnProperty.call(AmazonResults, key)) {
          const val = AmazonResults[key];
          let fine_title = FineTitle(val.title);
          WidgetObject.push(
            <Tile
              title={fine_title}
              price={val.price}
              img={val.img}
              href={val.href}
            />
          );
        }
      }
      //Amazon Scraping Completed
      //Launching Flipkart

      setWidgets(["..Scraping Flipkart Results.."]);
      KickstartFlipkartScraper(userQuery).then((FlipkartResults) => {
        for (let key = 0; key < 10; key += 1) {
          if (Object.hasOwnProperty.call(FlipkartResults, key)) {
            const val = FlipkartResults[key];
            let fine_title = FineTitle(val.title);
            WidgetObject.push(
              <Tile
                title={fine_title}
                price={val.price}
                img={val.img}
                href={val.href}
              />
            );
          }
        }
        setWidgets(WidgetObject);
      });
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
