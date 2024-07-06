import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "todos",
  password: "example",
  port: 5432,
});

export const getTodos = (request, response) => {
  pool.query("SELECT * FROM todos ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
