import express from "express";
import cors from "cors";
import { addNewNote } from "./controllers/NotesControllers.js";

import apiRouter from "./routes/apiRouter.js";

const app = express();
const PORT = 8000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/notes", apiRouter);
// add data to the db
app.post("/post", addNewNote);
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
