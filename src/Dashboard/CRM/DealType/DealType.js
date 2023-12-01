import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { BsThreeDotsVertical } from "react-icons/bs";

const DealType = () => {
    const data = [
        { name: 'Pending', value: 40 },
        { name: 'Loss', value: 20 },
        { name: 'Won', value: 20 },
    ];
    const COLORS = ['rgb(99 102 241)', 'rgb(107 114 128)', 'rgb(52 211 153)'];
    return (
        <div className='bg-slate-100 h-full rounded-2xl'>
            <div className='flex flex-row justify-between items-center px-3'>
                <h1 className='text-xl font-semibold'>Deal Type</h1>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
            </div>
            <PieChart width={250} height={150} >
                <Pie
                    cx={145}
                    cy={70}
                    data={data}
                    innerRadius={55}
                    outerRadius={72}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip></Tooltip>
            </PieChart>
            <div className='flex flex-row items-center justify-center gap-4 mt-5'>
                 <div className='flex flex-row gap-1 items-center justify-center'>
                 <div className="badge bg-indigo-500 badge-sm"></div>
                 <span>Pending</span>
                 </div>
                 <div className='flex flex-row gap-1 items-center justify-center'>
                 <div className="badge bg-emerald-400 badge-sm"></div>
                 <span>Won</span>
                 </div>
                 <div className='flex flex-row gap-1 items-center justify-center'>
                 <div className="badge bg-gray-500 badge-sm"></div>
                 <span>Loss</span>
                 </div>
            </div>
        </div>
    );
};

export default DealType;