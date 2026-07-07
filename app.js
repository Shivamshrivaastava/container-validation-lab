const express = require('express');
const app = express();
const PORT = 8080;

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server listening on 127.0.0.1:${PORT}`);
});
