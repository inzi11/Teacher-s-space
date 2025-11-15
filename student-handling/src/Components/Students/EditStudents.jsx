import React, { useEffect, useState } from "react";
import "../../Styles/AddStudents.css"
import { useNavigate, useParams } from "react-router-dom";
import { editStudent, getStudentById } from "../../Api/StudentAPI";
function EditStudents() {
    
  let [studentData, setStudentData] = useState({
    name: "",
    rollNumber: "",
    subjects: {
      maths: 0,
      physics: 0,
      english: 0,
      physicalEd: 0,
      chemisty: 0,
    },
    attendence: 0,
    grade: 0
  });



  function handleChange(e) {
    let { name, value } = e.target;

    if (
      ["maths", "physics", "english", "physicalEd", "chemisty"].includes(name)
    ) {
      setStudentData((prev) => ({
        ...prev,
        subjects: {
          ...prev.subjects,
          [name]: value,
        },
      }));
    } else {
      setStudentData((prev) => ({ ...prev, [name]: value }));
    }
  }





  let param = useParams(); 

  console.log(param);
  
  useEffect(() => {
    function getStudentDetail() {
      getStudentById(param.id)
        .then((res) => {
          setStudentData(res.data);
        })
        .catch((err) => {
          console.log(err);
      })
    }

    getStudentDetail();
  }, [param.id])


    
  let navigate = useNavigate();
    function edit_info(e) {
        e.preventDefault();
        editStudent(param.id, studentData)
            .then(res => {
                console.log(res);
              alert("updation Successful");
              navigate("/students")
              
            })
            .catch(err => {
                console.log( "THERE IS AN AXIOS ERROR", err);
        })
        
    }


  return (
    <div className="flex justify-center w-fit m-auto p-8 rounded-lg shadow-xl text-[var(--text)]">
      <form action="" className="flex flex-col gap-3 " onSubmit={edit_info}>
        <h3 className="font-semibold mb-4 text-lg">Personal Info</h3>

        <div className="inp-lab">
          <label htmlFor="">Name</label>
          <input
            type="text"
                      name="name"
                      placeholder="Student's Name"
            value={studentData.name}
            onChange={handleChange}
          />
        </div>

        <div className="inp-lab">
          <label htmlFor="">Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={studentData.rollNumber}
            placeholder="Student's Roll Number" onChange={handleChange} />
        </div>

        <div className="inp-lab">
          <label htmlFor="">Attendence</label>
          <input
            type="number"
            name="attendence"
            className="no-spinner"
            value={studentData.attendence}
            placeholder="Attendence"
            id=""
            onChange={handleChange}
          />
        </div>

        <div className="h-[1px] w-full bg-[#7b787891] my-4"></div>

        <div>
          <h3 htmlFor="" className="font-semibold mb-4 text-lg">
            Subjects Marks
          </h3>

          <div className="flex flex-col gap-3">
            <div className="inp-lab ">
              <label htmlFor="">Maths</label>
              <input
                type="number"
                name="maths"
                className="no-spinner"
                value={studentData.subjects.maths}
                placeholder="marks between 1-100"
                id=""
                onChange={handleChange}
              />
            </div>

            <div className="inp-lab">
              <label htmlFor="">Physics</label>
              <input
                type="number"
                name="physics"
                className="no-spinner"
                value={studentData.subjects.physics}
                placeholder="marks between 1-100"
                id=""
                onChange={handleChange}
              />
            </div>

            <div className="inp-lab">
              <label htmlFor="">Chemisty</label>
              <input
                type="number"
                name="chemisty"
                className="no-spinner"
                value={studentData.subjects.chemisty}
                placeholder="marks between 1-100"
                id=""
                onChange={handleChange}
              />
            </div>
            <div className="inp-lab">
              <label htmlFor="">Physical Education</label>
              <input
                type="number"
                name="physicalEd"
                className="no-spinner"
                value={studentData.subjects.physicalEd}
                placeholder="marks between 1-100"
                id=""
                onChange={handleChange}
              />
            </div>
            <div className="inp-lab">
              <label htmlFor="">Engilsh</label>
              <input
                type="number"
                name="english"
                className="no-spinner"
                value={studentData.subjects.english}
                placeholder="marks between 1-100"
                id=""
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

         <div className="inp-lab">
          <label htmlFor="">Grades</label>
          <input
            type="number"
            name="grade"
            value={studentData.grade}
            className="no-spinner"
            placeholder="Enter Your Percentage"
            id=""
            onChange={handleChange}
          />
        </div>


        <div className="flex justify-center my-6 ">
          <button className="bg-[var(--secondary)] hover:bg-[var(--primary)] hover:scale-105 duration-200  ease-in transition-all font-semibold text-xl py-2 px-5 text-white rounded-md">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudents;
