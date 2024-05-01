const amazonRoute = "amazon_data";
const url_processed = (raw) => {
  return "https://www.amazon.in/s?k=" + raw.trim().replaceAll(" ", "+");
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

function KickstartAmazonScraper(search_url) {
  const page_url = url_processed(search_url);
  const res = post_request(page_url);
  return res;
}

export default KickstartAmazonScraper;
