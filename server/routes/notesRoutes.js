import express from "express";
import {
  getNotes,
  getNoteById,
  createNote,
} from "../controllers/NotesControllers.js";

const router = express.Router();

router.route("/").get(getNotes);
router.route("/:id").get(getNoteById);
router.route("/").post(createNote);

export default router;
