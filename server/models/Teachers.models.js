import mongoose from "mongoose";

let teacherSign = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    notes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notes", 
    }
}, { timestamps: true }); 


export const Teacher = mongoose.model("Teacher", teacherSign);