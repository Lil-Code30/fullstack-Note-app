import { dbQuery, dbAdd } from "../db/dbQuery.js";

export async function getCategories(req, res) {
  try {
    let sql = `SELECT * FROM categories`;

    const categories = await dbQuery(sql);

    res.json(categories);
  } catch {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
}
