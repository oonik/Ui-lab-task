import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-slate-100 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/crm'>CRM</Link></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;