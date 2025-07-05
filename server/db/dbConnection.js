import sqlite3 from "sqlite3";
import path from "path";

const __dirname = import.meta.dirname;
const dbPath = path.join(__dirname, "database.db");

const dbConnection = () => {
  return new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.log("Error opening database:", err.message);
    } else {
      console.log("Connected to SQLite Database");
    }
  });
};

export default dbConnection;
