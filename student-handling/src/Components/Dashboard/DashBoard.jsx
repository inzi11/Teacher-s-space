import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardCard from "../DashBoardCard";
import WarningCard from "../Alerts/WarningCard";
import Filter from "../Filter";
import { deleteStudent, getAllStudents } from "../../Api/StudentAPI";

function DashBoard() {
  const [data, setData] = useState([]);
  const [force, setForce] = useState(false);
  const [filterBy, setFilterBy] = useState("");

  // let [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    getAllStudents()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [force]);


  let navigate = useNavigate();

  function editStudent(_id) {
    console.log(_id);
    navigate(`/edit-student/${_id}`);
  }



  function removeStudent(_id) {

    deleteStudent(_id)
      .then((res) => {
        console.log(res);
        alert("Item deleted")
        setForce(prev => !prev);
      })
      .catch((err) => {
        console.log(err)
      })
    
  }


  function getFilterBy(name) {
    setFilterBy(name);
  }

  let displayData = filterBy ? [...data].sort((a, b) => b[filterBy] - a[filterBy]) : [...data];
  


  return (
    <div className="text-[var(--text)] mx-auto md:px-6 lg:px-10 px-3">

{/* filter Yha krna hai?? */}
      <div className="my-10 flex justify-between">
        <h1 className="font-semibold text-5xl">
          DashBoard
        </h1>

        <div>
          <Filter getFilterBy={getFilterBy} />
        </div>
      </div>
      


      <div className="border border-dashed border-gray-500 md:p-10 sm:p-5 p-2 rounded-md">

   
        <div className="flex justify-center font-semibold text-3xl mb-8" >
          Total Students : {data.length}
        </div>


      <div className="flex flex-wrap gap-4 justify-center">
        

          {displayData.map((item) => (
            <DashBoardCard item={item} key={item._id} editStudent={editStudent} removeStudent={removeStudent} />
        ))}
        </div>
      </div>

    </div>
  );
}

export default DashBoard;
