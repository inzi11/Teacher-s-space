import React, { useState } from "react";
import { PiStudent } from "react-icons/pi";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {isLoggedIn, logout} = useContext(AuthContext);


  return (
    <nav className="bg-[var(--primary)] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wide flex items-center gap-3">
              <PiStudent /> Student Grade System
            </span>
          </div>

          

          
          {isLoggedIn ?
            
            (// need to add the links!!
             <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-200 transition duration-300">
              Dashboard
            </Link>
            <Link to="/students" className="hover:text-gray-200 transition duration-300">
              Students
            </Link>
            <Link to="/students/add-students" className="hover:text-gray-200 transition duration-300">
              Notes
            </Link>
            <Link to="/reports" className="hover:text-gray-200 transition duration-300">
              Reports
              </Link>

              <button onClick={logout} className="hover:text-gray-200 transition duration-300">Logout</button>
            </div>  )

            : (<div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-200 transition duration-300">
              Home
            </Link>
            <Link to="/students" className="hover:text-gray-200 transition duration-300">
              Students
            </Link>
            <Link to="/login" className="hover:text-gray-200 transition duration-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-gray-200 transition duration-300">
              Sign up
            </Link>
            <Link to="/reports" className="hover:text-gray-200 transition duration-300">
              Reports
            </Link>
            </div>  )
          }

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    open ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    open ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[var(--primary)] transition-all duration-300">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-[var(--primary)] transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/students/dashboard"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-[var(--primary)] transition duration-200"
          >
            Students
          </Link>
          <Link
            to="/students/add-students"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-[var(--primary)] transition duration-200"
          >
            Add Student
          </Link>
          <Link
            to="/reports"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-[var(--primary)] transition duration-200"
          >
            Reports
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
