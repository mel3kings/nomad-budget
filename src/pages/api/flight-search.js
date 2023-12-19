// api/flight-search.js

import fetch from "node-fetch";

export default async function flightSearch(req, res) {
  const apiKey = "sh428739766321522266746152871799";
  const endpoint = "https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to create flight search" });
  }
}
