import puppeteer from "puppeteer";
import jQuery from "jquery";
import fs from "fs";

const page_url = "https://www.amazon.in/";

async function Scrape() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(page_url, { waitUntil: "domcontentloaded" });
  const data = await page.content();
  console.log(jQuery());
  await browser.close();
  //console.log(jQuery().jquery);
}
Scrape();
