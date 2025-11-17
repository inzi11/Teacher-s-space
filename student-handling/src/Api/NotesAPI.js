import axios from "axios";

const Base_URL = "http://localhost:5000/api/notes";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllNotes = () =>
  axios.get(`${Base_URL}/allnotes`, authHeader());

export const saveNotes = (noteData) =>
  axios.post(`${Base_URL}/savenote`, noteData, authHeader());

export const updateNote = (updatedNote, id) =>
  axios.patch(`${Base_URL}/updateNote/${id}`, updatedNote, authHeader());

export const deleteNote = (id) =>
  axios.delete(`${Base_URL}/deletenote/${id}`, authHeader());
