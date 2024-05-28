const flipkartRoute = "flipkart_data";
const url_processed = (raw, filter) => {
  let range = "";
  if (+filter[0] && +filter[1]) {
    range = `&p%5B%5D=facets.price_range.from%3D${filter[0]}&p%5B%5D=facets.price_range.to%3D${filter[1]}`;
  }
  return (
    "https://www.flipkart.com/search?q=" +
    raw.trim().replaceAll(" ", "+").toLowerCase() +
    range
  );
};

const post_request = async (url) => {
  const request = await fetch(`http://localhost:8000/${flipkartRoute}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  if (request.ok) {
    const ScraperData = await request.json(); //object

    return ScraperData;
  }
};

function KickstartFlipkartScraper(search_url, filter) {
  const page_url = url_processed(search_url, filter);
  const res = post_request(page_url);
  return res;
}

export default KickstartFlipkartScraper;
