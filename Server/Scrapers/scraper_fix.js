//SCRAPER-FIX
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import fs from "fs";
const page_url_default = "https://www.amazon.in/s?k=plushie";
const title_class = "[target$='_blank']";
const img_class = "img.s-image";
const price_class = "span.a-price-whole";
const href_class = "span[data-component-type='s-product-image']";
const widget_id = (i) => "cel_widget_id$=" + `MAIN-SEARCH_RESULTS-${i}`;
const FetchAmazonResults = async (page_url = page_url_default) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(page_url, { waitUntil: "domcontentloaded" });
  const data = await page.content();
  const $ = cheerio.load(data);
  const results_list = [];
  fs.writeFile("res_array.html", data, (err) => 0);
  for (let i = 1; i < 10; i++) {
    const widget = $("div[" + widget_id(i) + "]");
    const text = $(widget).find(title_class).text();
    const img = $(widget).find(img_class).attr("src");
    const price = $(widget).find(price_class).text();
    const href =
      "https://amazon.in/" + $(widget).find(href_class).find("a").attr("href");
    if (price && text && img && href)
      results_list.push({ id: i, text, price, img, href });
  }
  //fs.writeFile("widget_text.json", JSON.stringify(results_list), (err) => 0);
  console.log("File Written");
  await browser.close();
  console.log(typeof results_list);
  return results_list;
};

export default FetchAmazonResults;
