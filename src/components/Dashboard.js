import React, { useState } from 'react';
import MetDash from './MetDash';
import MetanolPage from './MetanolPage';
import Clients from './Clients';

const Dashboard = () => {
    const [currentComponent, setCurrentComponent] = useState('MetDash');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const renderComponent = () => {
        switch (currentComponent)
        {
            case 'MetDash':
                return <MetDash />;
            case 'MetanolPage':
                return <MetanolPage />;
            case 'Clients':
                return <Clients />;
            default:
                return <MetDash />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-gray-700 p-4 flex justify-between items-center">
                <div className="text-white font-bold text-xl">Metanol - MAY</div>
                <button
                    className="text-white sm:hidden animate-pulse"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    🖱 menu
                </button>
                <div className="text-white hidden sm:block">Welcome, Admin</div>
            </nav>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`bg-gray-800 text-white sm:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <div className="p-4 font-bold text-lg border-b border-gray-700"></div>
                    <ul className="p-4">
                        <li className="mb-4">
                            <button
                                onClick={() => setCurrentComponent('MetDash')}
                                className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Overview
                            </button>
                        </li>
                        <hr className="border-gray-600" />
                        <li className="mb-4">
                            <button
                                onClick={() => setCurrentComponent('MetanolPage')}
                                className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Panorama
                            </button>
                        </li>
                        <hr className="border-gray-600" />
                        <li className="mb-4">
                            <button
                                onClick={() => setCurrentComponent('Clients')}
                                className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Clients
                            </button>
                        </li>
                        <hr className="border-gray-600" />
                    </ul>
                </aside>

                <div className="flex flex-col w-full p-4">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
