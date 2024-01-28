import mysql from "mysql";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "db_project",
});
