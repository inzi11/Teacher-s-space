import axios from "axios";

const Base_URL = "http://localhost:5000/api/teachers";


export const teacherSign = async (signupData) => await axios.post(`${Base_URL}/signup`, signupData);

export const teacherLogin = async (loginData) => await axios.post(`${Base_URL}/login`, loginData);