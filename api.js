const express = require("express");
const app = express();
const fs = require("fs");

// JSON file se quotes read karna
const quotes = JSON.parse(fs.readFileSync("quotes.json", "utf8"));

// Home route
app.get("/", (req, res) => {
    res.send("Quotes API is running...");
});

// Get all quotes
app.get("/quotes", (req, res) => {
    res.json(quotes);
});

// Get random quote
app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// Render ke liye required PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});
