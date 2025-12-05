Quotes API

A simple free API that returns a random quote.


---

Base URL

https://quotes-api-rohan.onrender.com


---

Endpoint

GET /quotes

Returns a random quote.

URL:

https://quotes-api-rohan.onrender.com/quotes

Example Response:

{
  "quote": "The best way to predict the future is to create it.",
  "author": "Peter Drucker"
}


---

Example Usage

JavaScript

fetch("https://quotes-api-rohan.onrender.com/quotes")
  .then(res => res.json())
  .then(data => console.log(data));

Python

import requests

res = requests.get("https://quotes-api-rohan.onrender.com/quotes")
print(res.json())
