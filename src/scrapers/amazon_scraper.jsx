import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

const page_url_default = "https://www.amazon.in/s?k=mobile+phone";
const widget_class = ".sg-col-inner";
const title_class = ".a-size-medium.a-color-base.a-text-normal";
const img_Class = "img.s-image";
const price_class = "span.a-price-whole";
const href_class =
  ".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal";

const AmazonScrape = async (page_url) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(page_url, { waitUntil: "domcontentloaded" });
  const data = await page.content();
  const $ = cheerio.load(data);

  const results_list = [];
  const widget = $(widget_class).each((i, element) => {
    const title = $(element).find(title_class).first().text();
    let img = $(element).find(img_Class).attr();
    if (img) img = img["src"];
    const price = $(element).find(price_class).first().text();
    let href = $(element).find(href_class).attr();
    if (href) href = href["href"];
    if (title && href && price)
      results_list.push({ id: i, title, price, img, href });
  });
  await browser.close();
  return results_list;
};

export default AmazonScrape;
