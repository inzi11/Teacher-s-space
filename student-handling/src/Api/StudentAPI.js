import axios from "axios";

const Base_URL = "http://localhost:5000/api/students";


export const getAllStudents = () => axios.get(Base_URL);

// it'll only give that student detail from the base_ULR
export const getStudentById = (id) => axios.get(`${Base_URL}/${id}`)

export const addStudent = (studentData) => axios.post(`${Base_URL}/add`, studentData, 
    {
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    }
);

export const deleteStudent = (id) => axios.delete(`${Base_URL}/${id}`,
    {
        headers: {
           Authorization : `Bearer ${localStorage.getItem("token")}`
       }
   }
);

export const getTopStudents = () => axios.get(`${Base_URL}/top`);

export const editStudent = (id, studentData) => axios.patch(`${Base_URL}/${id}`, studentData, 
    {
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    }
 )