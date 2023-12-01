import React from 'react';
import Barchart from './Barchart/Barchart';
import Pchart from './Pchart/Pchart';
import { ResponsiveContainer } from 'recharts';
import AnnualProfit from './AnnualProfit/AnnualProfit';
import LastMonth from './LastMonth/LastMonth';
import MostLead from './MostLead/MostLead';
import DealStatus from './DealStatus/DealStatus';
import DealType from './DealType/DealType';
import CallDuration from './CallDuration/CallDuration';
import SalesForecast from './SalesForecast/SalesForecast';
import DealForecastByOwner from './DealForecastByOwner/DealForecastByOwner';
import RecentLeads from './RecentLeads/RecentLeads';
import ToDoList from './ToDoList/ToDoList';
import DashboardFooter from '../DashboardFooter/DashboardFooter';


const CRM = () => {
    return (
        <>
            <ResponsiveContainer className='flex flex-row divide-x divide-dashed divide-blue-200 m-2' height={300}>
                <Barchart></Barchart>
                <Pchart></Pchart>
                <AnnualProfit></AnnualProfit>
            </ResponsiveContainer>
            <div className='grid grid-cols-3 gap-4 m-2'>
                <div className='col-span-2'>
                    <LastMonth></LastMonth>
                </div>
                <MostLead></MostLead>
                <div className='col-span-2'>
                    <DealStatus></DealStatus>
                </div>
                <div>
                <DealType></DealType>
                </div>
                <div>
                    <CallDuration></CallDuration>
                </div>
                <ResponsiveContainer>
                    <SalesForecast></SalesForecast>
                </ResponsiveContainer>
                <div>
                    <DealForecastByOwner></DealForecastByOwner>
                </div>
                <div className='col-span-2'>
                    <RecentLeads></RecentLeads>
                </div>
                <div>
                    <ToDoList></ToDoList>
                </div>
                <div className='col-span-3'>
                <DashboardFooter></DashboardFooter>
                </div>
            </div>
            
        </>
    );
};

export default CRM;