import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { getAllStudents } from '../../Api/StudentAPI';

function DashBoard() {

  const { user } = useContext(AuthContext);

  const [totalStudents, setTotalStudents] = useState(0);
  const [totalNotes, setTotalNotes] = useState(0);

  useEffect(() => {
    
    // fetching the students 
    async function fetchStats() {

      try {
        
        const studentsDetails = await getAllStudents();
      
      
        // did not make this route
        // const NotesDetails = await getAllNotes();

        setTotalStudents(studentsDetails.data.length);
      } catch (error) {
        console.log("Error in fetching the dashboard stats", error);
      }
    }

    fetchStats();
  }, []);

  // format Joining date

  let joinedOn = user?.createdAt ? new Date(user.createdAt * 1000).toLocaleDateString()  : "N/A"

  return (
     <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">
        Welcome back, {user?.name} (^-^)/
      </h1>

      <p className="text-gray-500 mb-6">Joined on: {joinedOn}</p>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Students</h2>
          <p className="text-4xl font-bold mt-2">{totalStudents}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Notes</h2>
          <p className="text-4xl font-bold mt-2">{totalNotes}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Quick Actions</h2>
        <div className="flex gap-4">
          <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow">
             Add Student
          </button>
          <button className="bg-purple-600 text-white px-5 py-3 rounded-lg shadow">
             Generate Notes
          </button>
          <button className="bg-teal-600 text-white px-5 py-3 rounded-lg shadow">
             View Notes
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
