import React from 'react';
import { AreaChart, Area, Tooltip } from 'recharts';
import { BsThreeDotsVertical } from "react-icons/bs";

const CallDuration = () => {
    const data = [
        {
            name: 'Page A',
            uv: 70,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Page B',
            uv: 60,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 90,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Page D',
            uv: 80,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'Page E',
            uv: 100,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'Page F',
            uv: 70,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 80,
            pv: 4300,
            amt: 2100,
          },
      ];
    return (
        <div className='bg-slate-100 rounded-2xl p-3 h-full'>
            <div className='flex flex-row justify-between items-center px-3'>
                <h1 className='text-xl font-semibold'>Avg. Call Duration</h1>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
            </div>
            <div className='px-3 mb-14'>
                <h3 className='text-lg font-medium text-indigo-400'>10m: 52s</h3>
                <p className='font-normal'>Base on 100 calls</p>
            </div>
            <AreaChart
          width={274}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Tooltip></Tooltip>
        </AreaChart>
        </div>
    );
};

export default CallDuration;