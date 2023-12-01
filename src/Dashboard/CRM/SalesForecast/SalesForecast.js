import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { BsThreeDotsVertical } from "react-icons/bs";

const SalesForecast = () => {
    const data = [
        {
            name: 'Goal',
            Sat: 50,
        },
        {
            name: 'Pending',
            Sun: 28,
        },
        {
            name: 'Profit',
            Mon: 40,
        }
    ];
    return (
        <div className='bg-slate-100 rounded-2xl p-4 h-full'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xl font-semibold'>Sales Forecast</h1>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
            </div>
            <BarChart
                width={230}
                height={200}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6}/>
                <XAxis dataKey="name" />
                <YAxis/>
                <Bar barSize={12} dataKey="Sat" fill="rgb(139 92 246)" />
                <Bar barSize={12} dataKey="Sun" fill="rgb(63 63 70)" />
                <Bar barSize={12} dataKey="Mon" fill="rgb(161 161 170)" />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default SalesForecast;