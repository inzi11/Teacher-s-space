import express from "express"
import { deleteNote, getAllNotes, saveNotes , updateNotes  } from "../controllers/notes.controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/allnotes", verifyToken , getAllNotes);
router.post("/savenote", verifyToken , saveNotes);
router.patch("/updateNote/:id", verifyToken, updateNotes);
router.delete("/deletenote/:id", verifyToken, deleteNote);


export default router;