import express from "express";
import { addStudent, deleteStudent, editStudent, getStudent, getTopStudents, getSingleStudent } from "../controllers/students.controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// router here are used to show where we are sending the data
// remember two routes can be similar ONLY IF THEY HAVE DIFFERENT REQUEST!!

router.get("/", getStudent);
router.post("/add", verifyToken ,addStudent);
router.delete("/:id",verifyToken ,deleteStudent);
router.patch("/:id", verifyToken, editStudent);
router.get("/:id", getSingleStudent)
router.get("/top", getTopStudents);

export default router;