const express = require("express");
const app = express();
const cors = require("cors");
const {scrapeNSEData ,scrapeCommodityPrices} =require("./controllers");
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/api/nse-indices", async (req, res) => {
  try {
    const data = await scrapeNSEData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch NSE data',
      error: error.message
    });
  }
});

app.get("/api/commodities", async (req, res) => {
  try {
    const data = await scrapeCommodityPrices();
    res.json({ success: true, data });
    console.log(data);
    console.log("hii");
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch NSE data',
      error: error.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("API Listening");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});