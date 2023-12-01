import React from 'react';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

const Barchart = () => {
    const data = [
        {
            Sat: 20,
        },
        {
            Sun: 30,
        },
        {
            Mon: 46,
        },
        {
            Tue: 50,
        },
        {
            Wed: 46,
        },
        {
            Thu: 30,
        },
        {
            Fri: 22,
        },
    ];
    return (
        <div className='bg-slate-100 px-10 py-10 rounded-l-2xl'>
           <h1 className='text-3xl font-bold'>1,352 <span className='text-xs text-green-400 bg-green-200 px-2 rounded-full'>+4.67%</span></h1>
           <p className='text-slate-400'>Campaign Sent</p>
            <BarChart
                width={230}
                height={150}
                data={data}
            >
                <Bar barSize={10} dataKey="Sat" fill="rgb(226 232 240)" />
                <Bar barSize={10} dataKey="Sun" fill="#8884d8" />
                <Bar barSize={10} dataKey="Mon" fill="rgb(226 232 240)" />
                <Bar barSize={10} dataKey="Tue" fill="#8884d8" />
                <Bar barSize={10} dataKey="Wed" fill="rgb(226 232 240)" />
                <Bar barSize={10} dataKey="Thu" fill="#8884d8" />
                <Bar barSize={10} dataKey="Fri" fill="rgb(226 232 240)" />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Barchart;