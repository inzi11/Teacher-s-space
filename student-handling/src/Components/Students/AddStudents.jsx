import React, { useState } from "react";
import { addStudent } from "../../Api/StudentAPI";

function AddStudents() {
  const [studentData, setStudentData] = useState({
    name: "",
    rollNumber: "",
    attendence: 0,
    subjects: {
      maths: 0,
      physics: 0,
      english: 0,
      physicalEd: 0,
      chemisty: 0,
    },
    grade: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      ["maths", "physics", "english", "physicalEd", "chemisty"].includes(name)
    ) {
      setStudentData((prev) => ({
        ...prev,
        subjects: { ...prev.subjects, [name]: value },
      }));
    } else {
      setStudentData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const submit_info = (e) => {
    e.preventDefault();
    addStudent(studentData)
      .then((res) => {
        console.log(res);
        alert("Student Added Successfully 🎉");

        setStudentData({
          name: "",
          rollNumber: "",
          attendence: 0,
          subjects: {
            maths: 0,
            physics: 0,
            english: 0,
            physicalEd: 0,
            chemisty: 0,
          },
          grade: 0,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-8">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-6">
           Add New Student
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill out the student's information and performance details
        </p>

        <form onSubmit={submit_info} className="space-y-10">
          {/* Personal Info Section */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4 border-b-2 border-[var(--secondary)] pb-1">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={studentData.name}
                  onChange={handleChange}
                  placeholder="Student's Name"
                  required
                  className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Roll Number</label>
                <input
                  type="text"
                  name="rollNumber"
                  value={studentData.rollNumber}
                  onChange={handleChange}
                  placeholder="e.g. 2025A12"
                  required
                  className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Attendance (%)</label>
                <input
                  type="number"
                  name="attendence"
                  value={studentData.attendence}
                  onChange={handleChange}
                  placeholder="0 - 100"
                  required
                  className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all no-spinner"
                />
              </div>
            </div>
          </div>

          {/* Subjects Section */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4 border-b-2 border-[var(--secondary)] pb-1">
              Subject Marks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(studentData.subjects).map((subject) => (
                <div key={subject} className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1 capitalize">
                    {subject === "physicalEd" ? "Physical Education" : subject}
                  </label>
                  <input
                    type="number"
                    name={subject}
                    value={studentData.subjects[subject]}
                    onChange={handleChange}
                    placeholder="0 - 100"
                    required
                    className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all no-spinner"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Grade */}
          <div className="flex flex-col md:w-1/3">
            <label className="font-medium text-gray-700 mb-1">Overall Grade (%)</label>
            <input
              type="number"
              name="grade"
              value={studentData.grade}
              onChange={handleChange}
              placeholder="Enter percentage"
              required
              className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all no-spinner"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-md transition-all hover:scale-105"
            >
              Add Student 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudents;
