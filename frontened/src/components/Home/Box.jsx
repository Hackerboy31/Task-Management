import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";


const Box = ({BoxDiv , setBoxDiv}) => {
  return (
    <>
      <div className={`${BoxDiv} top-0 left-0 bg-gray-700 opacity-50 h-screen w-ful`}></div>
      <div className={`${BoxDiv} top-0 left-0 flex items-center justify-center justify-center h-screen w-full`}>
        <div className="w-3/6 bg-gray-300 p-4 rounded flex flex-col justify-center">
          <div className="my-2 flex justify-center">
            <button className="text-8xl"><IoCheckmarkDoneCircle />
            </button>
          </div>
          <div className="flex justify-center my-5">
            <p>New Task has been created successfully</p>
          </div>
         
          <button onClick={() => setBoxDiv("hidden")} className="px-3 w-full py-2 bg-black rounded text-white text-2xl font-semibold">
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Box;
