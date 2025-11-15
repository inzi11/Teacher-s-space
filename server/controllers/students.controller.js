import { Student } from "../models/Students.models.js";

// create 

export const addStudent = async (req, res) => {
    try {
        let student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Get all stud

export const getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get single student

export const getSingleStudent = async (req, res) => {
    try {
        let student = await Student.findById(req.params.id); 

        if (!student) {
            res.status(404).json({ message: "student not found!" }); 
        }

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({ message : error.message})
    }
}

// delete Student

export const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student removed Succesfully!" })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Edit Student

export const editStudent = async (req, res) => {
    try {
        let updateStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ); 

        if (!updateStudent) {
            return res.status(404).json({ message: "student not found" }); 
        }

        res.status(200).json({message : "student data updated successfully"})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


// Report (top 5)

export const getTopStudents = async (req, res) => {
    try {
        const student = await Student.find().sort({ grade: -1 }).limit(5);
        res.json(student);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}