// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import connectDB from "./config/connectDB.js";
// import { Student } from "./models/Students.models.js";


// dotenv.config();

// connectDB();


//  const studet = [
//   {
//     "name": "Charlie",
//     "rollNumber": "103",
//     "subjects": { "maths": 100, "physics": 100, "chemisty": 98, "physicalEd": 97, "english": 99 },
//     "attendence": 105,
//     "grade": 98.8
//   },
//   {
//     "name": "Ava",
//     "rollNumber": "104",
//     "subjects": { "maths": 92, "physics": 95, "chemisty": 90, "physicalEd": 94, "english": 91 },
//     "attendence": 98,
//     "grade": 92.4
//   },
//   {
//     "name": "Ben",
//     "rollNumber": "105",
//     "subjects": { "maths": 76, "physics": 70, "chemisty": 72, "physicalEd": 80, "english": 74 },
//     "attendence": 82,
//     "grade": 74.4
//   },
//   {
//     "name": "Clara",
//     "rollNumber": "106",
//     "subjects": { "maths": 45, "physics": 50, "chemisty": 48, "physicalEd": 55, "english": 52 },
//     "attendence": 79,
//     "grade": 50.0
//   },
//   {
//     "name": "Daniel",
//     "rollNumber": "107",
//     "subjects": { "maths": 82, "physics": 86, "chemisty": 84, "physicalEd": 89, "english": 85 },
//     "attendence": 90,
//     "grade": 85.2
//   },
//   {
//     "name": "Ella",
//     "rollNumber": "108",
//     "subjects": { "maths": 60, "physics": 58, "chemisty": 61, "physicalEd": 62, "english": 65 },
//     "attendence": 70,
//     "grade": 61.2
//   },
//   {
//     "name": "Finn",
//     "rollNumber": "109",
//     "subjects": { "maths": 30, "physics": 25, "chemisty": 28, "physicalEd": 40, "english": 35 },
//     "attendence": 60,
//     "grade": 31.6
//   },
//   {
//     "name": "Grace",
//     "rollNumber": "110",
//     "subjects": { "maths": 88, "physics": 92, "chemisty": 91, "physicalEd": 95, "english": 90 },
//     "attendence": 97,
//     "grade": 91.2
//   },
//   {
//     "name": "Hugo",
//     "rollNumber": "111",
//     "subjects": { "maths": 67, "physics": 65, "chemisty": 69, "physicalEd": 72, "english": 70 },
//     "attendence": 85,
//     "grade": 68.6
//   },
//   {
//     "name": "Isla",
//     "rollNumber": "112",
//     "subjects": { "maths": 95, "physics": 97, "chemisty": 94, "physicalEd": 96, "english": 92 },
//     "attendence": 99,
//     "grade": 94.8
//   },
//   {
//     "name": "Jake",
//     "rollNumber": "113",
//     "subjects": { "maths": 55, "physics": 50, "chemisty": 56, "physicalEd": 58, "english": 52 },
//     "attendence": 73,
//     "grade": 54.2
//   },
//   {
//     "name": "Luna",
//     "rollNumber": "114",
//     "subjects": { "maths": 85, "physics": 88, "chemisty": 84, "physicalEd": 90, "english": 86 },
//     "attendence": 93,
//     "grade": 86.6
//   },
//   {
//     "name": "Mason",
//     "rollNumber": "115",
//     "subjects": { "maths": 98, "physics": 99, "chemisty": 98, "physicalEd": 96, "english": 97 },
//     "attendence": 108,
//     "grade": 97.6
//   },
//   {
//     "name": "Nora",
//     "rollNumber": "116",
//     "subjects": { "maths": 40, "physics": 42, "chemisty": 35, "physicalEd": 45, "english": 38 },
//     "attendence": 68,
//     "grade": 40.0
//   },
//   {
//     "name": "Oscar",
//     "rollNumber": "117",
//     "subjects": { "maths": 75, "physics": 80, "chemisty": 74, "physicalEd": 76, "english": 78 },
//     "attendence": 85,
//     "grade": 76.6
//   },
//   {
//     "name": "Penny",
//     "rollNumber": "118",
//     "subjects": { "maths": 90, "physics": 93, "chemisty": 92, "physicalEd": 94, "english": 89 },
//     "attendence": 101,
//     "grade": 91.6
//   }
// ]



// const importData = async () => {
//     try {
//         await Student.deleteMany();

//         const created = await Student.insertMany(studet);
//         console.log("Data imported successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("Error importing data:", error);
//     process.exit(1);
//   }
// };

// importData();

