import React from "react";
import { GiCrossedBones } from "react-icons/gi";
import Box from "./Box";
import { useState } from "react";

const InputData = ({ InputDiv, setInputDiv }) => {
  const [BoxDiv, setBoxDiv] = useState("hidden");
  const handleSubmit = () => {
    setInputDiv("hidden"); 
    setBoxDiv("fixed"); 
  };

  return (
    <>
      <div
        className={`${InputDiv} top-0 left-0 bg-gray-700 opacity-50 h-screen w-full`}
      ></div>
      <div
        className={`${InputDiv} top-0 left-0 flex items-center justify-center justify-center h-screen w-full`}
      >
        <div className="w-3/6 bg-gray-300 p-4 rounded">
          <div className="my-2 flex justify-end">
            <button onClick={() => setInputDiv("hidden")} className="text-2xl">
              <GiCrossedBones />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded my-2 w-full"
          />

          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Enter thye Description"
            className="px-3 py-2 rounded w-full"
          />
          <button className="px-3 py-2 bg-green-700 rounded text-white text-2xl font-semibold"
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <Box BoxDiv={BoxDiv} setBoxDiv={setBoxDiv} />
    </>
  );
};

export default InputData;
