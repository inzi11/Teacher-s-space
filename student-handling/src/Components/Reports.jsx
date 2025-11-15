import React, { useEffect, useState } from 'react'
import { getTopStudents } from '../Api/StudentAPI';

function Reports() {

    let [studentData, setStudentData] = useState([]);

    useEffect(() => {
        getTopStudents()
            .then(res => setStudentData(res.data))
            .catch(err => console.log(err));
        
    }, [])

    let SortedStudents = [...studentData]
    .sort((a, b) => ( b.grades - a.grades ));
    
    console.log(SortedStudents)
    
    
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-[var(--primary)]">
        Reports & Insights
      </h1>

     
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-gray-800"> Top 5 Students</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--secondary)] text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Roll</th>
              <th className="p-2">Average</th>
            </tr>
          </thead>
          <tbody>
            {SortedStudents.slice(0,5).map(s => (
              <tr key={s.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.rollNumber}</td>
                <td className="p-2">{s.grades}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-gray-800"> Subject-wise Average</h2>
              <ul className="space-y-2">
                  
          {SortedStudents.map((subj) => (
            <li key={subj.id} className="flex justify-between border-b pb-1">
              <span>{subj.name}</span>
              <span>{subj.grades}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Reports
