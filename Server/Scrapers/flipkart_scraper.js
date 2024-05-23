import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import fs from "fs";
const page_url_default = "https://www.flipkart.com/search?q=mobile+phones";
const title_class = "[loading$='eager']";
const img_class = "[loading$='eager']";
const price_class = ".Nx9bqj";
const href_class = "[rel$='noopener noreferrer']";
const widget_id = "div._75nlfW";
const FetchFlipkartResults = async (page_url = page_url_default) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(page_url, { waitUntil: "domcontentloaded" });
  const data = await page.content();
  const $ = cheerio.load(data);
  const results_list = [];
  const widgets = $(widget_id);
  widgets.each((i, widget) => {
    const main_class = $(widget).find(href_class);
    const title = "Flipkart " + $(main_class).find(title_class).attr("alt");
    const img = $(main_class).find(img_class).attr("src");
    const price =
      $(widget)
        .find(price_class)
        .text()
        .match(/₹([^₹]*)/)[1] + "F";
    const href = "https://www.flipkart.com" + main_class[0].attribs.href;

    // if (price && img && href && title)
    results_list.push({ source: "F", id: i, title, price, img, href });
  });
  // fs.writeFile("flipkart_data.html", data, (err) => 0);
  // fs.writeFile(
  //   "flipkart_widget_text.json",
  //   JSON.stringify(results_list),
  //   (err) => 0
  // );
  console.log(results_list.length);
  console.log("Process Finished");

  await browser.close();
  return results_list;
};

export default FetchFlipkartResults;
