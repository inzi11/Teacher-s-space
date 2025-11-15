import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    attendence: Number,
    grade: Number,
    subjects: {
        maths: Number,
        physics: Number,
        chemisty: Number,
        physicalEd: Number,
        english: Number
    }

}, { timestamps: true });


export const Student = mongoose.model("Student", StudentsSchema); 