import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";

import { Link } from 'react-router-dom';
const Sidebar = () => {
    const Data = [
        {
            title: "All Tasks",
            icon: <CgNotes />,
            Link: "/"
        },
        {
            title: "Important Tasks",
            icon: <MdLabelImportant />,
            Link: "/importanttasks",
        },
        {
            title: "Completed Tasks",
            icon: <FaCheckDouble />,
            Link: "/completedtasks",
        },
        {
            title: "Incompleted Tasks",
            icon: <TbNotebookOff />,
            Link: "/incompletedtasks",
        }
    ];
  return (
  <>
        <div>
            <h2 className='text-xl font-semibold'>Hackerboy31</h2>
            <h4 className='m-1 text-sm'>shauryakumar0831@gmail.com</h4>
            <hr/>
        </div>
        <div>
            {Data.map((items, i) => (
                <Link to={items.Link} key={i} className='m-2 flex items-center hover:bg-black hover:text-white p-2 rounded transition-all duration-300'>
                    {items.icon}&nbsp;{items.title}
                </Link>
            ))}
        </div>
        <div>
            <button className='bg-gray-500 text-white w-full p-2 rounded'>Logout</button>
        </div>
        </> 
  )
}

export default Sidebar;
