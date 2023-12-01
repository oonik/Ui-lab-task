import React from 'react';

const AnnualProfit = () => {
    return (
        <div className='flex flex-col justify-between py-10 bg-slate-100 w-80 rounded-r-2xl'>
            <div className='ml-10'>
                <h1 className='text-3xl font-bold'>$51,352<span className='text-xs text-red-400 bg-red-200 px-2 rounded-full ml-2'>-2.65%</span></h1>
                <p className='text-slate-400'>Annual Profit</p>
            </div>
            <div>
                <div className='flex flex-row gap-16'>
                    <p className='font-bold ml-10'>$100,500 to Goal</p>
                    <p>75%</p>
                </div>
                <progress className="progress progress-info w-56 ml-10" value="75" max="100"></progress>
            </div>
        </div>
    );
};

export default AnnualProfit;