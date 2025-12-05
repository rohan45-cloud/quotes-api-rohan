const express = require("express");
const fs = require("fs");
const app = express();

// Root Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Rohan's Free Quotes API",
        endpoints: {
            quotes: "/quotes"
        }
    });
});

// Quotes Route
app.get("/quotes", (req, res) => {
    const data = fs.readFileSync("quotes.json");
    const quotes = JSON.parse(data);

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.json(randomQuote);
});

// Start Server
app.listen(3000, () => {
    console.log("API running on http://localhost:3000");
});
