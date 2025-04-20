"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const os_1 = __importDefault(require("os"));
// import pool from "./database/database";
// import createUserTable from "./data/createUserTable";
// import usersRoute from "./routes/routeUsers";
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// createUserTable();
app.get("/", (req, res) => {
    res.send(`Hello from, ${os_1.default.platform} and ${os_1.default.hostname} `);
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
