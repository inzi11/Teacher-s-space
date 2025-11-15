import React from 'react'

function StudentsCard({item, removeStudent , editStudent}) {
  return (
      <>
           <div
            className=" md:py-4 md:px-8 sm:py-2 sm:px-6 px-3 py-1 rounded-lg shadow-md
             gap-x-5 justify-between w-fit"
          >
            <div className="font-semibold flex flex-col gap-2 mb-4">
              <h1 className="text-2xl">Student Name : {item.name}</h1>
              <h3 className="text-xl ">Roll no. : {item.rollNumber}</h3>
              <h3 className="text-xl ">Grades : {item.grade}</h3>
              <p className="text-xl">
                Attendece :{" "}
                <span
                  className={`${
                    item.attendence <= 75 ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {item.attendence}
                </span>
              </p>
              
            </div>


            <div className="h-[1px] w-full bg-[#8a87876e] my-4">

            </div>

            
            <div>
              <div className="text-2xl font-semibold mb-4">
                Student's Marks
              </div>
              <table className="md:min-w-full  border-gray-200 text-center md:text-base text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="md:px-4 md:py-2 px-2 py-1 border">Maths</th>
                    <th className="md:px-4 md:py-2 px-2 py-1 border">English</th>
                    <th className="md:px-4 md:py-2 px-2 py-1  border">Physics</th>
                    <th className="md:px-4 md:py-2 px-2 py-1  border">Chemistry</th>
                    <th className="md:px-4 md:py-2 px-2 py-1 border">Physical Education</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className={`md:px-4 md:py-2 px-2 py-1 border ${
                        item.subjects.maths <= 33
                          ? "text-red-700"
                          : "text-green-700"
                      }`}
                    >
                      {item.subjects.maths}
                    </td>
                    <td
                      className={`md:px-4 md:py-2 px-2 py-1 border ${
                        item.subjects.english <= 33
                          ? "text-red-700"
                          : "text-green-700"
                      }`}
                    >
                      {item.subjects.english}
                    </td>
                    <td
                      className={`md:px-4 md:py-2 px-2 py-1 border ${
                        item.subjects.physics <= 33
                          ? "text-red-700"
                          : "text-green-700"
                      }`}
                    >
                      {item.subjects.physics}
                    </td>
                    <td
                      className={`md:px-4 md:py-2 px-2 py-1 border ${
                        item.subjects.chemisty <= 33
                          ? "text-red-700"
                          : "text-green-700"
                      }`}
                    >
                      {item.subjects.chemisty}
                    </td>
                    <td
                      className={`md:px-4 md:py-2 px-2 py-1 border ${
                        item.subjects.physicalEd <= 33
                          ? "text-red-700"
                          : "text-green-700"
                      }`}
                    >
                      {item.subjects.physicalEd}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={()=>(editStudent(item._id))}
                className="bg-[var(--secondary)] hover:bg-[var(--primary)] hover:scale-105 duration-200  ease-in transition-all font-semibold text-xl py-1 px-3 text-white rounded-md">
            Edit
              </button>
              <button
                onClick={()=>{removeStudent(item._id)}}
                className="bg-red-700 hover:bg-red-600 hover:scale-105 duration-200  ease-in transition-all font-semibold text-xl py-2 px-3 text-white rounded-md">
            Remove
              </button>
              
            </div>
          </div>
      </>
  )
}

export default StudentsCard
