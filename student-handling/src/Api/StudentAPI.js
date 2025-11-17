import axios from "axios";

const Base_URL = "http://localhost:5000/api/students";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllStudents = () => axios.get(Base_URL);

// it'll only give that student detail from the base_ULR
export const getStudentById = (id) => axios.get(`${Base_URL}/${id}`);

export const addStudent = (studentData) =>
  axios.post(`${Base_URL}/add`, studentData, authHeader());

export const deleteStudent = (id) =>
  axios.delete(`${Base_URL}/${id}`, authHeader());

export const getTopStudents = () => axios.get(`${Base_URL}/top`);

export const editStudent = (id, studentData) =>
  axios.patch(`${Base_URL}/${id}`, studentData, authHeader());
