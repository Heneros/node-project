import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import os from "os";
// import pool from "./database/database";
// import createUserTable from "./data/createUserTable";

// import usersRoute from "./routes/routeUsers";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());
// createUserTable();

app.get("/", (req, res) => {
  res.send(`Version 3.0 .Hello from, ${os.platform} and ${os.hostname} `);
});
// app.use("/api/users", usersRoute);

// console.log(5555);

// app.get("/", async (req, res) => {
//   const result = await pool.query("SELECT current_database()");
//   console.log("result", result.rows);
//   res.send(`The database name is 123 : ${result.rows[0].current_database}`);
// });

app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});
