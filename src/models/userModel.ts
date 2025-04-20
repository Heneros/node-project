import pool from "../database/database";

interface User {
  id: string;
  name: string;
  email: string;
}

export const getAllUsersService = async (): Promise<User[] | null> => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserByIdService = async (
  id: string
): Promise<User[] | null> => {
  const result = await pool.query("SELECT * FROM users WHERE id = $i", [id]);
  return result.rows[0];
};

export const createUserService = async (
  name: string,
  email: string
): Promise<User[] | null> => {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
};

export const updateUserService = async (
  id: string,
  name: string,
  email: string
): Promise<User | null> => {
  const result = await pool.query(
    "UPDATE users SET name=$i, email=$2 WHERE id=$3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0];
};

export const deleteUserService = async (id: string): Promise<User | null> => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
