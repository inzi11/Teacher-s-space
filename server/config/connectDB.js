// db collection 

import mongoose from "mongoose";



const connectDB = async () => {
    try {
        mongoose.connect(process.env.MOGNO_URI);

        console.log("mongoDb connected Successfully!");
  
        
    } catch (error) {
        console.error("MongoDB connection failed" , error.message)
        process.exit(1);
    }
    
    
} 


export default connectDB;