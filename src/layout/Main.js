import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default Main;