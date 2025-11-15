import React, { useState } from 'react'

function Filter({getFilterBy}) {

    let [selectedOption, setSelectedOption] = useState("name");


    function handleVal(e) {
        let value = e.target.value; 
        setSelectedOption(value);
    }

    console.log("selected option is ", selectedOption);


    let filterItem = ["name" , "rollNumber", "grade",  "attendence"]
    return (
      <>
          <div className="flex gap-x-4 items-center justify-between bg-white p-4 rounded-2xl shadow-md w-full max-w-md mx-auto text-[var(--text)]">

  <div className="flex items-center gap-x-3">
    <h1 className="text-lg font-semibold">Sort By:</h1>
    
    <select
      name="option"
      value={selectedOption}
      onChange={handleVal}
      className="border border-[var(--secondary)] rounded-xl px-3 py-2 text-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
    >
      {filterItem.map((item, index) => (
          <option
              key={index}
              value={item}
          >{item}</option>
      ))}
    </select>
  </div>

  <div>
    <button
      onClick={() => getFilterBy(selectedOption)}
      className="bg-[var(--secondary)] hover:bg-[var(--primary)] text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md"
    >
      Sort 
    </button>
  </div>
</div>

    </>
  )
}

export default Filter
