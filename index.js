import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ChatGPT Telegram Bot ishlayapti 🚀");
});

app.listen(3000, () => {
  console.log("Server ishlayapti");
});
