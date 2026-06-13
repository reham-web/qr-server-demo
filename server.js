const express = require("express");
const QRCode = require("qrcode");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const url = req.query.url || "https://google.com";

  const qrImage = await QRCode.toDataURL(url);

  res.send(`
    <h1>QR Code Generator</h1>

    <form method="GET">
      <input
        type="text"
        name="url"
        placeholder="Enter URL"
        value="${url}"
        style="width:300px;padding:10px;"
      />
      <button type="submit">Generate QR</button>
    </form>

    <br>

    <img src="${qrImage}" />

    <p><b>URL:</b> ${url}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`QR Code server running on port ${PORT}`);
});
