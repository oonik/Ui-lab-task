import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const ToDoList = () => {
    return (
        <div className='bg-slate-100 rounded-2xl p-4'>
            <div className='flex flex-row justify-between items-center px-3'>
                <h3 className='text-xl font-semibold'>To-do list</h3>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <span>0%</span>
                <progress className="progress progress-primary w-56 ml-2" value={10} max="100"></progress>
            </div>
            <form>
                <div className="form-control flex flex-row justify-between">
                    <label className="label justify-normal gap-2 cursor-pointer">
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                        <span className="label-text">Design a poster for a company</span>
                    </label>
                    <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Delete</a></li>
                    </ul>
                </div>
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label justify-normal gap-2 cursor-pointer">
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                        <span className="label-text">Analyze Data</span>
                    </label>
                    <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Delete</a></li>
                    </ul>
                </div>
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label justify-normal gap-2 cursor-pointer">
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                        <span className="label-text">YouTube campaign</span>
                    </label>
                    <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Delete</a></li>
                    </ul>
                </div>
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label justify-normal gap-2 cursor-pointer">
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                        <span className="label-text">Assaign employee</span>
                    </label>
                    <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Delete</a></li>
                    </ul>
                </div>
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label justify-normal gap-2 cursor-pointer">
                        <input type="checkbox"  className="checkbox checkbox-primary" />
                        <span className="label-text">Remember me</span>
                    </label>
                    <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 bg-slate-100 rounded-full shadow-none"><BsThreeDotsVertical/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32">
                        <li><a>Create</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                    </ul>
                </div>
                </div>
            </form>
        </div>
    );
};

export default ToDoList;