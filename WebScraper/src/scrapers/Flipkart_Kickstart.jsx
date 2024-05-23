const flipkartRoute = "flipkart_data";
const url_processed = (raw) => {
  return (
    "https://www.flipkart.com/search?q=" +
    raw.trim().replaceAll(" ", "+").toLowerCase()
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

function KickstartFlipkartScraper(search_url) {
  console.log("Kickstart working fine");
  const page_url = url_processed(search_url);
  const res = post_request(page_url);
  return res;
}

export default KickstartFlipkartScraper;
