const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Quotes API is running...");
});

app.get("/quote", (req, res) => {
  const quotes = JSON.parse(fs.readFileSync("quotes.json", "utf-8"));
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
