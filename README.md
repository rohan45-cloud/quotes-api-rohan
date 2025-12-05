📌 Free Random Quotes API

A simple and free API that returns random motivational & inspirational quotes in JSON format.
No API key required — anyone can use it easily.


---

🔥 Base URL

https://quotes-api-rohan.onrender.com



---

📌 Endpoint

GET /quote → Returns a random quote

✔ Example Request
https://quotes-api-rohan.onrender.com


---

📥 Example JSON Response

{
  "quote": "The best way to predict the future is to create it.",
  "author": "Peter Drucker"
}


---

💻 Code Examples

✔ JavaScript (Fetch API)

fetch("https://quotes-api-rohan.onrender.com)
  .then(res => res.json())
  .then(data => console.log(data));

✔ Python Example

import requests

res = requests.get("https://quotes-api-rohan.onrender.com")
print(res.json())
