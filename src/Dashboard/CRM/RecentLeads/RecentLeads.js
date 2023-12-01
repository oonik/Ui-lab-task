import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const RecentLeads = () => {
    return (
        <div className='bg-slate-100 rounded-2xl p-4'>
            <div className='flex flex-row justify-between items-center px-3'>
                <h1 className='text-xl font-semibold'>Recent Leads</h1>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='border-dashed border-slate-200'>
                            <th>NAME</th>
                            <th>EMAIL OR PHONE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-dashed border-slate-200'>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://i.postimg.cc/fTpQqZDw/people1.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Astole Banne</div>
                                        <div className="text-sm opacity-50">$25,360.00</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            astole@gmail.com
                            </td>
                            <td><span className='bg-green-100 text-green-500 py-1 px-2 rounded'>Won Lead</span></td>
                            <td>
                                <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                                        <li><a>Create</a></li>
                                        <li><a>Edit</a></li>
                                        <li><a>Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-dashed border-slate-200'>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://i.postimg.cc/fTpQqZDw/people1.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                            </td>
                            <td><span className='text-orange-400 py-1 px-2 rounded'>Cold Lead</span></td>
                            <td>
                            <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                                        <li><a>Create</a></li>
                                        <li><a>Edit</a></li>
                                        <li><a>Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://i.postimg.cc/fTpQqZDw/people1.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                            </td>
                            <td><span className='text-red-500 bg-red-100 py-1 px-2 rounded'>New Lead</span></td>
                            <td>
                            <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                                        <li><a>Create</a></li>
                                        <li><a>Edit</a></li>
                                        <li><a>Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentLeads;