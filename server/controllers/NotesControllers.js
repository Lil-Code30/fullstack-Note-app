import { dbQuery, dbAdd } from "../db/dbQuery.js";

// controller to get all the notes in db
export async function getNotes(req, res) {
  try {
    let sql = `SELECT * FROM notes`;

    const notes = await dbQuery(sql);

    res.json(notes);
  } catch {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
}

// controller to get note by id in db
export async function getNoteById(req, res) {
  const { id } = req.params;

  try {
    let sql = `SELECT * FROM notes WHERE id = ?`;

    const result = await dbQuery(sql, [id]);

    if (result.length === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(result[0]);
  } catch {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
}

//add a new note in db
export async function createNote(req, res) {
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
