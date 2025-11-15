import React from 'react'

function WarningCard(prop) {
  return (
    <div className='flex justify-center items-center absolute'>
        <div className='w-[300px] h-[250px] bg-white'>
              <h1 className='text-xl '>Do You Really want to {prop.name}?</h1>

              <div>
                  <button className='p-2 bg-red-700 border border-solid border-black'>Yes</button>
                  <button className='p-2 bg-[var(--secondary)] border border-solid border-black'>No</button>
              </div>
      </div>
    </div>
  )
}

export default WarningCard
