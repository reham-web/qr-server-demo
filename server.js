const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>QR Code Host Server</h1>
    <p>Server is running successfully.</p>
    <p>This server is used to host QR Code services for restaurants and institutions.</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    message: "Server is healthy",
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`QR Code server running on port ${PORT}`);
});
