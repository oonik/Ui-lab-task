import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { MdOutlineCall, MdOutlineMailOutline, MdOutlineOtherHouses } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const MostLead = () => {
    const data = [
        { name: 'Chrome', value: 40 },
        { name: 'Yahoo!', value: 20 },
        { name: 'Firefox', value: 20 },
        { name: 'Opera Mini', value: 20 },
    ];
    const COLORS = ['rgb(99 102 241)', 'rgb(212 212 212)', 'rgb(107 114 128)','rgb(52 211 153)'];
    return (
        <div className='bg-slate-100 rounded-2xl'>
            <div className='flex flex-row justify-between items-center px-3'>
                <h1 className='text-xl font-semibold'>Most Leads</h1>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
            </div>
            <PieChart width={250} height={148} >
                <Pie
                    cx={145}
                    cy={70}
                    data={data}
                    innerRadius={45}
                    outerRadius={60}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip></Tooltip>
            </PieChart>
            <div className=''>
                <hr className='border-dashed border-slate-300 mb-4'/>
                <div className='flex flex-row gap-7 justify-start ml-8'>
                    <p className='flex flex-row items-center gap-1'>
                    <MdOutlineMailOutline className='text-indigo-600 text-2xl'/>
                    <span>Email</span>
                    </p>
                    <p>500 vs 1000</p>
                    <p>60%</p>
                </div>
                <hr className='border-dashed border-slate-300 mt-4 mb-4'/>
                <div className='flex flex-row gap-7 justify-start ml-8'>
                    <p className='flex flex-row items-center gap-1'>
                    <MdOutlineCall className='text-green-600 text-2xl'/>
                    <span>Call</span>
                    </p>
                    <p>360 vs 965</p>
                    <p>10%</p>
                </div>
                <hr className='border-dashed border-slate-300 mt-4 mb-4'/>
                <div className='flex flex-row gap-7 justify-start ml-8'>
                    <p className='flex flex-row items-center gap-1'>
                    <FaRegUser className='text-slate-500 text-2xl'/>
                    <span>Social</span>
                    </p>
                    <p>3684 vs 5000</p>
                    <p>20%</p>
                </div>
                <hr className='border-dashed border-slate-300 mt-4 mb-4'/>
                <div className='flex flex-row gap-7 justify-start ml-8'>
                    <p className='flex flex-row items-center gap-1'>
                    <MdOutlineOtherHouses className='text-slate-300 text-2xl'/>
                    <span>Other</span>
                    </p>
                    <p>469 vs 678</p>
                    <p>10%</p>
                </div>
            </div>
        </div>
    );
};

export default MostLead;