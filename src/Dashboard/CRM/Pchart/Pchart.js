import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Pchart = () => {
    const data = [
        { name: 'Cloths', value: 2658 },
        { name: 'Others', value: 4348 },
        { name: 'Foods', value: 6687 },
    ];
    const COLORS = ['rgb(124 58 237)', 'rgb(231 229 228)', 'rgb(51 65 85)'];
    return (
        <div className='bg-slate-100 py-10 relative'>
            <h1 className='text-3xl font-bold ml-10'>$1,352 <span className='text-xs text-green-400 bg-green-200 px-2 rounded-full'>+4.67%</span></h1>
            <p className='text-slate-400 ml-10'>Average Deals</p>
            <div className='flex flex-col absolute bottom-2 left-4'>
            {
              data.map((item, i) => <p className='text-slate-400 ml-10' key={i}>{item.name} <span className='text-black'>${item.value}</span></p>)
            }
            </div>
            <PieChart width={300} height={150} >
                <Pie
                    cx={100}
                    cy={60}
                    data={data}
                    innerRadius={35}
                    outerRadius={50}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Pchart;