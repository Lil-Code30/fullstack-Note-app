import { dbQuery, dbAdd } from "../db/dbQuery.js";

// controller to get all the notes in db
export async function getAllNotes(req, res) {
  try {
    let sql = `SELECT * FROM notes`;
    let sql2 = `SELECT * FROM categories`;
    const notes = await dbQuery(sql);
    const categories = await dbQuery(sql2);
    res.json({ notes, categories });
  } catch {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
}

//add a new note in db
export async function addNewNote(req, res) {
  try {
    if (req.body) {
      const { title, category, content } = req.body;
      let sql = `INSERT INTO notes (title, content, category, created_at) VALUES (?, ?, ?, ?)`;
      const created_at = new Date();
      const newNote = await dbAdd(sql, [title, category, content, created_at]);
      res.json({ newNote: newNote, data: req.body });
    }

    res.send({ message: "Data received" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add new notes" });
  }
}
