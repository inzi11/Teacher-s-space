import mongoose from "mongoose";

let NotesSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    subject: {
        type: String, 
    }, 
    content: {
        type: String, 
    }, 
    teacher: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Teacher", 
        required: true
    }
}, { timestamps: true })


export const Notes = mongoose.model("Notes", NotesSchema);