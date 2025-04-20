import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 20,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Successfully connected to PostgreSQL");
    client.release();
  } catch (err) {
    console.error("Database connection error:", err);
  }
};
testConnection();
export default pool;
