import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BsThreeDotsVertical } from "react-icons/bs";

const LastMonth = () => {
    const data = [
        {
            name: 'Jan',
            uv: 8,
            pv: 10,
        },
        {
            name: 'Feb',
            uv: 4,
            pv: 10,
        },
        {
            name: 'Mar',
            uv: 5,
            pv: 20,
        },
        {
            name: 'Apr',
            uv: 17,
            pv: 30,
        },
        {
            name: 'May',
            uv: 18,
            pv: 40,
        },
        {
            name: 'Jun',
            uv: 40,
            pv: 50,
        },
        {
            name: 'Jul',
            uv: 18,
            pv: 50,
        },
        {
            name: 'Aug',
            uv: 10,
            pv: 50,
        },
        {
            name: 'Sep',
            uv: 6,
            pv: 50,
        },
        {
            name: 'Oct',
            uv: 20,
            pv: 50,
        },
    ];
    return (
        <div className='bg-slate-100 rounded-2xl w-full'>
            <div className='flex flex-row justify-between'>
                <ul className="menu menu-horizontal ">
                    <li><a>Revenue</a></li>
                    <li><a>Users</a></li>
                    <li><a>Deals</a></li>
                    <li><a>Profit</a></li>
                </ul>
                <div>
                    <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                            <li><a>Create</a></li>
                            <li><a>Edit</a></li>
                            <li><a>Delete</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl font-bold ml-5'>22,356 <span className='text-xs text-green-400 bg-green-200 px-2 rounded-full'>+4.67%</span></h1>
            <p className='text-slate-400 ml-5 mb-5'>Last month</p>
            <AreaChart
                width={500}
                height={300}
                data={data}
                
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="pv" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default LastMonth;