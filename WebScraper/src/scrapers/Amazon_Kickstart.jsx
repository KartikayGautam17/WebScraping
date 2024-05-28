const amazonRoute = "amazon_data";
const url_processed = (raw, filter) => {
  let range = "";
  if (+filter[0] && +filter[1])
    range = `&low-price=${filter[0]}&high-price=${filter[1]}`;
  return (
    "https://www.amazon.in/s?k=" +
    raw.trim().replaceAll(" ", "+").toLowerCase() +
    range
  );
};

const post_request = async (url) => {
  const request = await fetch(`http://localhost:8000/${amazonRoute}`, {
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

function KickstartAmazonScraper(search_url, filter) {
  const page_url = url_processed(search_url, filter);
  const res = post_request(page_url);
  return res;
}

export default KickstartAmazonScraper;
