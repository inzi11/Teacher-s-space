import React, { useState } from "react";

import { teacherLogin } from "../../Api/TeacherAPI";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "../../Styles/TeacherAuth.css";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

function TeacherLogin() {
  let [teacherData, setTeacherData] = useState({
    email: "",
    password: "",
  });


  let { login } = useContext(AuthContext);
 
  function handleChange(e) {
    let { name, value } = e.target;
    setTeacherData((prev) => ({ ...prev, [name]: value }));
  }

  function submit_info(e) {
    e.preventDefault();
    teacherLogin(teacherData)
      .then((res) => {
        console.log(res);

        alert("Login Successful");

        // getting the token from response 
        let token = res.data.token; 
       login(token)

        // add the route
      })
      .catch((err) => {
        console.log(err);
      });
  }


  function getTokenData() {

    let token = localStorage.getItem("token");
    let decodedData = jwtDecode(token); 

    console.log(decodedData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] px-4">
     <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-6">
          Teacher Login
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Welcome back!
        </p>

    
        <form action="" className="flex flex-col gap-3 " onSubmit={submit_info}>
          
        <div className=" relative flex items-center">
          <FaUser className="absolute left-2 text-gray-500" />

          <input
            type="text"
            name="email"
            value={teacherData.email}
            placeholder="Teacher's email"
            onChange={handleChange}
            className="border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none  w-full"
          />
        </div>

        <div className=" relative flex items-center" >
          <FaLock className="absolute left-2 text-gray-500"/>
          <input
            type="text"
            name="password"
            className="border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none  w-full"
            value={teacherData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

         <button
            type="submit"
            className="mt-4 py-3 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-semibold rounded-xl shadow-md transition-all hover:scale-105"
          >
            Log In 
          </button>

          <div className="text-center text-gray-600 mt-4">
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[var(--secondary)] hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>


        <div>
          <button onClick={getTokenData}>Token data</button>
        </div>
          </div>
    </div>
  );
}

export default TeacherLogin;
