import { GoStar, GoStarFill } from "react-icons/go";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useState } from "react";

export default function Project() {

    const [priority, setPriority] = useState(false)

    return (
        <div className="w-full  min-h-screen py-5 px-10 bg-slate-300 pt-[125px] flex flex-col gap-6  text-black">
            <div className="flex justify-between items-center">
                <div className="text-4xl font-bold ">PROJECTS</div>
                <button className="px-5 py-3 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-slate-300">Create +</button>
            </div>
            <hr className="border-2 border-black" />
            <div className="px-5 bg-white shadow-xl py-3 flex justify-between item-center rounded-2xl ">
                <div className="w-[60%] flex flex-col justify-center gap-3 items-start">
                    <div className="text-2xl font-bold">Project Name</div>
                    <div>Project Discription Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, architecto!</div>
                </div>
                <div className="w-[40%] flex justify-end items-center gap-5 relative">
                    <div className="text-xl group relative">
                        <FaPencilAlt />
                        <span className="absolute bottom-full mb-1 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                            Edit
                        </span>
                    </div>
                    <div className="text-xl group relative">
                        <FaRegTrashAlt />
                        <span className="absolute bottom-full mb-1 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                            Delete
                        </span>
                    </div>
                    <div className="text-xl group relative" onClick={() => setPriority(!priority)}>
                        {!priority ? <GoStar /> : <GoStarFill />}
                        <span className="absolute bottom-full mb-1 right-[-50%] w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                            {priority ? 'Unmark as Priority' : 'Mark as Priority'}
                        </span>
                    </div>
                </div>

            </div>

        </div>
    );
}