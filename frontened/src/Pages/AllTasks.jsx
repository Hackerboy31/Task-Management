import React from 'react'
import Card from '../components/Home/Card'
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../components/Home/InputData';
import { useState } from 'react';


const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden");
  return (

    <>
     <div>
      <div className='w-full flex justify-end px-5 py-2.5'>
        <button onClick={() => setInputDiv("fixed")}><IoIosAddCircle className='text-3xl text-gray-500 hover:text-gray-900 transition-all duration-300'/></button>
      </div>
    <Card home="true" setInputDiv = {setInputDiv}/>
    </div>

    <InputData InputDiv = {InputDiv} setInputDiv = {setInputDiv}/>
    </>
  
    
  )
}

export default AllTasks;
