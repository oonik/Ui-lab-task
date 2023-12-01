import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import CRM from "../../Dashboard/CRM/CRM";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout></DashboardLayout>,
        children: [
         {
            path: '/crm',
            element: <CRM></CRM>
         }
        ]
    }
])