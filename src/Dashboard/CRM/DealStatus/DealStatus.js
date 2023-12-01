import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const DealStatus = () => {
    return (
        <section className='bg-slate-100 rounded-2xl w-full'>
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
                <table className="table">
                    <thead>
                        <tr className='border-dashed border-slate-200'>
                            <th>SALES REPRESENTATIVE</th>
                            <th>COMPANY NAME</th>
                            <th>STATUS</th>
                            <th>DEAL VALUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
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
                                        <div className="text-sm opacity-50">Sales Manager</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            Absternet LLC
                            </td>
                            <td><span className='bg-green-100 text-green-500 py-1 px-2 rounded'>Deal won</span></td>
                            <td>203.50K</td>
                        </tr>
                        {/* row 2 */}
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
                            <td><span className='text-red-500 bg-red-100 py-1 px-2 rounded'>Stuck</span></td>
                            <td>283.50K</td>
                        </tr>
                        {/* row 3 */}
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
                            <td className='text-orange-400 py-1 px-2 rounded'>Pending</td>
                            <td>243.50K</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DealStatus;