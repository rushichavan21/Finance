const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./models/auth');
const { scrapeNSEData, scrapeCommodityPrices } = require("./controllers");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://your-deployment.com"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch(err => console.error("MongoDB Connection Error ❌", err));

  app.post('/signup', async (req, res) => {
    try {
      const { firstName, lastName, email, password, confirmPassword } = req.body;
  
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match" });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: "Email already registered" });
      }
  
      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();
  
      res.status(201).json({ success: true, message: "User registered successfully", user: newUser });
    } catch (err) {
      console.error("Signup Error ❌:", err.message);
      res.status(500).json({ success: false, error: err.message });
    }
  });
  
  
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
      }
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ success: false, message: "No record exists" });
      }
  
      if (user.password !== password) {
        return res.status(400).json({ success: false, message: "Incorrect password" });
      }
  
      res.json({ success: true, message: "Login successful" });
    } catch (error) {
      console.error("Login Error ❌:", error.message);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

app.get("/api/nse-indices", async (req, res) => {
  try {
    const data = await scrapeNSEData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch NSE data', error: error.message });
  }
});

app.get("/api/commodities", async (req, res) => {
  try {
    const data = await scrapeCommodityPrices();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch commodity data', error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("API Listening");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000 🚀");
});