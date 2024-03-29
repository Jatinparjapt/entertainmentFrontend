import React from 'react'
import "./spiner.css"
const Spiner = () => {
  return (
    <>
    <div className='flex  justify-center items-center ' >
      <div className=' flex flex-col justify-center items-center mx-40 mt-40 mb-7' >
    <div className=' loader bg-slate-500' >
            </div>
            
            <div className="flex text-4xl text-zinc-100  justify-center items-center ">
              Loading...
            </div>
            </div>
            </div>
</>
  )
}

export default Spiner