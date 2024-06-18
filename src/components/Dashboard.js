import React, { useState } from 'react';
import MetDash from './MetDash';
import MetanolPage from './MetanolPage';

const Dashboard = () => {
    const [currentComponent, setCurrentComponent] = useState('MetDash');

    const renderComponent = () => {
        switch (currentComponent)
        {
            case 'MetDash':
                return <MetDash />;
            case 'MetanolPage':
                return <MetanolPage />;
            // Adicione mais cases aqui se houver mais componentes
            default:
                return <MetDash />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-gray-700 p-4 flex justify-between items-center">
                <div className="text-white font-bold text-xl">Metanol Estatísticas</div>
                <div className="text-white">Welcome, Gustavo</div>
            </nav>

            {/* Main Content */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-1/8 bg-gray-800 text-white">
                    <div className="p-4 font-bold text-lg border-b border-gray-700"></div>
                    <ul className="p-4">
                        <li className="mb-4">
                            <button
                                onClick={() => setCurrentComponent('MetDash')}
                                className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Operacional
                            </button>
                        </li>
                        <hr className="border-gray-600" />
                        <li className="mb-4">
                            <button
                                onClick={() => setCurrentComponent('MetanolPage')}
                                className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Overview
                            </button>
                        </li>
                        <hr className="border-gray-600" />
                        <li className="mb-4">
                            <button
                                onClick={() => setCurrentComponent('AnalysisPage')}
                                className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Análise
                            </button>
                        </li>
                        <hr className="border-gray-600" />
                        {/* <li className="mb-4">
                            <button className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Logout</button>
                        </li> */}
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


