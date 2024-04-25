// import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
function Get_query_url_amazon(userQuery) {
  return (
    "https://www.amazon.in/s?k=" + userQuery.replaceAll(" ", "+")
  ).toLowerCase();
}
function KickstartAmazonScraper(userQuery) {}

export default KickstartAmazonScraper;
