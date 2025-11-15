import express from "express";
import { signupTeacher, loginTeacher, AllTeachers} from "../controllers/teachers.controller.js"


const router = express.Router();

router.post("/signup", signupTeacher);
router.post("/login", loginTeacher);
router.get("/allteacher" , AllTeachers)


export default router;