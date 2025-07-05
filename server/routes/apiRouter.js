import express from "express";
import { getAllNotes } from "../controllers/NotesControllers.js";

const apiRouter = express.Router();

apiRouter.get("/", getAllNotes);

export default apiRouter;
