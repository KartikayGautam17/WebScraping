import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import fs from "fs";
const page_url_default = "https://www.amazon.in/s?k=plushie";
//const title_class = "span.a-size-medium.a-color-base.a-text-normal";
const img_class = "img.s-image";
const price_class = "span.a-price-whole";
const href_class = "span[data-component-type='s-product-image']";
const widget_id = "cel_widget_id";
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
  const widgets = $("div[" + widget_id + "]");
  widgets.each((i, widget) => {
    const title = $(widget).find("h2 a span").text();
    const img = $(widget).find(img_class).attr("src");
    const price = $(widget).find(price_class).text();
    const href =
      "https://amazon.in/" + $(widget).find(href_class).find("a").attr("href");
    if (price && img && href && title)
      results_list.push({ source: "A", id: i, title, price, img, href });
  });
  console.log(results_list.length);
  //fs.writeFile("widget_text.json", JSON.stringify(results_list), (err) => 0);
  //console.log("File Written");
  await browser.close();
  return results_list;
};

export default FetchAmazonResults;
