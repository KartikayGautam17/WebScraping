import express, { json } from "express";
import cors from "cors";

import FetchAmazonResults from "./Scrapers/amazon_scraper.js";

const app = express();
app.use(cors());
app.use(json());
app.get("/getdata", (req, res) => {
  res.json({ message: "Hi This is GET" });
});
app.get("/getdata2", (req, res) => {
  res.json({ message: "Hi This is GET 2" });
});
app.post("/postdata", (req, res) => {
  const request = String(req.body);
  console.log(request);
  if (request.endsWith("abcd")) {
    res.status(400).send({ msg: "Some error Oi !" });
  } else if (request.endsWith("1800")) {
    res.status(404).json("Sorry not sorry");
  } else {
    res.status(200).json({ message: "Backend recieved => " + request });
  }
});

app.post("/amazon_data", (request, response) => {
  const page_url = request.body.url;
  console.log(page_url);
  try {
    const AmazonResults = FetchAmazonResults(page_url).then(
      (results_object) => {
        response.json(results_object);
      }
    ); //object
  } catch {
    console.log("some error in the backend");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
