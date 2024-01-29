import mysql from "mysql";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "4440133762",
  database: "db_project",
});
