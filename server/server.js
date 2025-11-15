import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import studentRoutes from "./routes/studentRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());





// // ceating an route
// app.get('/', async (req, res) => {
//    try {
//     res.send("hello world")
//    } catch (error) {
//        console.log("error : ", error);
//    }
// });

connectDB();

// Remember app.use() -> is used as a parent inside which we can load multiple routes. tales two args -> (route name ,  routers)
app.use("/api/students", studentRoutes);
app.use("/api/teachers" , teacherRoutes)



app.listen(process.env.PORT || 5000, () => {
    console.log(`the port is listenig to ${process.env.PORT}`)
});