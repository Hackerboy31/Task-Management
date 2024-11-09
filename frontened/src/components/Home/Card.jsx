// import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";



const Card = ({home, setInputDiv}) => {
    const Data = [
        {
            title: "All Best Coder",
            desc: "I am very good coder and I have very good skilss related to my work",
            status: "In complete"
        },
        {
            title: "OOPS concept",
            desc: "OOPS is generally known as Object Oriented Programming Language",
            status: "Complete"
        },
        {
            title: "Frontened",
            desc: "In frontened development we generally make the page structure with thje help of HTMl and CSS used for styling the page ",
            status: "In complete"
        },
        {
            title: "JavaScript",
            desc: "JavaScript is a programming language used to create dynamic and interactive web pages",
            status: "In complete"
        },
    ];

   
  return (
    <div className=' grid grid-cols-3 gap-4 p-4'>
      {Data && Data.map((item, i) =>(
        <div className='flex flex-col justify-between bg-gray-200 rounded-sm p-4'>
        <div>
        <h3 className='text-xl font-semibold'>{item.title}</h3>
        <p className='text-medium m-2'>{item.desc}</p>
        
        </div>
      <div className='mt-4 w-full flex gap-2 items-center'>
            <button className={`${item.status === "In complete" ? 
                "bg-red-300 hover:bg-red-600" : "bg-green-300 hover:bg-green-600" } text-white p-2 rounded`}>{item.status}</button>
            <div className='text-black bg-gray-300 p-2 rounded text-xl flex justify-around w-3/6 font-semibold'>
            <button><CiHeart /></button>
            <button><FaRegEdit /></button>
            <button><MdDeleteForever /></button>
            </div>
        </div>
      </div>
    ))}

    {home === "true" &&
    (
        <button  className='flex flex-col justify-center items-center bg-gray-200 rounded-sm p-4 text-gray-500 hover:scale-105 cursor-pointer transition-all duration-300' onClick={() => setInputDiv("fixed")} >
        <IoIosAddCircle className='text-6xl font-semibold' />
   
           <h2 className='text-2xl mt-4 font-semibold'>Add Tasks</h2>
         </button>
    )
    }
     
    </div>
  )
}

export default Card
