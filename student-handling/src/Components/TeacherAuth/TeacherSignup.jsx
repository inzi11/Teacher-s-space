import React, { useState } from "react";
import { Link } from "react-router-dom";
import { teacherSign } from "../../Api/TeacherAPI";
import { FaLock, FaUser, FaPen } from "react-icons/fa";

function TeacherSignup() {
  const [teacherData, setTeacherData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prev) => ({ ...prev, [name]: value }));
  };

  const submit_info = (e) => {
    e.preventDefault();
    teacherSign(teacherData)
      .then((res) => {
        console.log(res);
        alert("Signup Successful! Welcome aboard 🎉");
        setTeacherData({ name: "", email: "", password: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again!");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-6">
          Teacher Sign Up
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Create your account here
        </p>

        <form onSubmit={submit_info} className="flex flex-col gap-5">
          
          <div className="relative">
            <FaPen className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              value={teacherData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={teacherData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              value={teacherData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 py-3 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-semibold rounded-xl shadow-md transition-all hover:scale-105"
          >
            Sign Up 
          </button>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[var(--secondary)] hover:underline font-semibold"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default TeacherSignup;
