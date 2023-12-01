import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const DealForecastByOwner = () => {
    return (
        <div className='bg-slate-100 rounded-2xl p-2'>
            <div className='flex flex-row justify-between items-center px-3'>
                <h3 className='text-xl'>Deal Status</h3>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table p-0 m-0">
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Deal Won</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-1">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-9 h-9">
                                            <img src="https://i.postimg.cc/fTpQqZDw/people1.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Astole Banne</div>
                                        <div className="text-sm opacity-50">$25,360</div>
                                    </div>
                                </div>
                            </td>
                            <td>$25,000</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-1">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-9 h-9">
                                            <img src="https://i.postimg.cc/fTpQqZDw/people1.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Jhone Abela</div>
                                        <div className="text-sm opacity-50">$25,360</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            $25,000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-1">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-9 h-9">
                                            <img src="https://i.postimg.cc/fTpQqZDw/people1.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Lisa Been</div>
                                        <div className="text-sm opacity-50">$25,360</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            $25,000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DealForecastByOwner;