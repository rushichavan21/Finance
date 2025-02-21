const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { scrapeNSEData, scrapeCommodityPrices } = require("./controllers");
const { UserBasicModel } = require("./models/user");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://your-deployment.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/api/nse-indices", async (req, res) => {
  try {
    const data = await scrapeNSEData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch NSE data", error: error.message });
  }
});

app.get("/api/commodities", async (req, res) => {
  try {
    const data = await scrapeCommodityPrices();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch commodity data", error: error.message });
  }
});

// API to check user existence or create a new user
app.post("/api/get-user", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if user exists
    let user = await UserBasicModel.findOne({ email });

    if (!user) {
      // Create a new user with a default balance
      user = new UserBasicModel({ email, accountBalance: 200000 });
      await user.save();
      return res.status(201).json({ message: "User created", accountBalance: user.accountBalance });
    }

    // If user exists, return the account balance
    res.status(200).json({ accountBalance: user.accountBalance });
  } catch (error) {
    console.error("Error fetching/creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("API Listening");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
