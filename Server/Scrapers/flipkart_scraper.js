import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import fs from "fs";
const page_url_default = "https://www.flipkart.com/search?q=plushie";
const title_class = ".KzD1HZ";
const img_class = ".DByuf4";
const price_class = ".Nx9bqj _4b5DiR";
const href_class = ".CGtC98";
const widget_id = ".tUxRFH";
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
  fs.writeFile("flipkart_res_array.html", data, (err) => 0);
  const widgets = $("div[" + widget_id + "]");
  widgets.each((i, widget) => {
    // const title = $(widget).find("h2 a span").text();
    // const img = $(widget).find(img_class).attr("src");
    // const price = $(widget).find(price_class).text();
    // const href =
    //   "https://www.flipkart.com/" +
    //   $(widget).find(href_class).find("a").attr("href");
    // if (price && img && href && title)
    //   results_list.push({ id: i, title, price, img, href });
  });

  //fs.writeFile("widget_text.json", JSON.stringify(results_list), (err) => 0);
  //console.log("File Written");
  await browser.close();
  return results_list;
};

export default FetchFlipkartResults;
