import dbConnection from "./dbConnection.js";

const db = dbConnection();

export function dbQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        console.log("DB Query Error:", err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export function dbAdd(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err, rows) => {
      if (err) {
        console.log("DB Add Error:", err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
