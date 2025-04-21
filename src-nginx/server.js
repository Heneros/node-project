import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

import os from "os";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(123);

  res.send(`Version 3.0 .Hello from, ${os.platform()} and ${os.hostname()}`);
});

app.get("/nginx", async (req, res) => {
  try {
    // const response = await fetch("http://nginx");
    const response = await fetch("http://127.0.0.1:51319");

    const body = await response.text();
    console.log(body);
    res.send(body);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).send("Ошибка при запросе к nginx");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
