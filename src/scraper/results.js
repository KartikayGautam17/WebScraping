import puppeteer from "puppeteer";
import jQuery from "jquery";

const page_url = "https://www.amazon.in/";

async function Scrape() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(page_url, { waitUntil: "domcontentloaded" });
  const data = await page.content();
  //const target = jQuery.parseHTML(data);
  //console.log(target);
  const results = [];

  console.log(results);
  console.log(jQuery().jquery);
}
Scrape();
