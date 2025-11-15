import { Teacher } from "../models/Teachers.models.js";
import* as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Signup
export const signupTeacher = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const existing = await Teacher.findOne({ email });

    if (existing) {
          console.log("it exists");
          return res.status(400).json({ message: "Email already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const teacher = await Teacher.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Teacher registered successfully", teacher });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Signin

export const loginTeacher = async (req, res) => {
  try {
    
const { email, password } = req.body;

    const teacher = await Teacher.findOne({email});

    if (!teacher) {
      res.status(400).json({ message: "email not found" });
    }

    const isMatch = bcrypt.compare(password, teacher.password);
    // password not matching
    if (!isMatch) {
      return res.status(400).json({ message: "invalid Password" });
    }

    /* jwt token - it's like a hall way pass that takes 3 args -> 
        jwt.sign(payload(data -> encoded not encrypted don't pass password), SECRET_KEY, EXPIREY_TIME)
        */
    const token = jwt.sign(
      { id: teacher._id, email: teacher.email, name: teacher.name },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    // here we send the token to the frontend
    res.json({ message: "Login Successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


export const AllTeachers = async (req, res) => {

  try {
      let allTeacher = await Teacher.find();
  res.status(201).json(allTeacher);
  } catch (error) {
    res.status(500).json({ message: "Something is Wrong??", error: error.message });
  }

}
