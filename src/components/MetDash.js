import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const dataJanuary = {
    labels: ['Volume', 'Net Revenue', 'Cost of Goods', 'Margin', 'Other Costs', 'Warehousing', 'Freight of Transportation', 'Margem Média Bruta'],
    datasets: [
        {
            label: 'January',
            data: [1826.18, 798585.55, 714949.30, 33937.23, 331.10, 1600.09, 47767.82, 18.58],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
            ],
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Financial Overview',
        },
    },
};

const MetDash = () => {
    return (
        <>
            <main className="flex-1 p-4 bg-gray-100">
                {/* Widgets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Volume (kg)</h2>
                        <p>1.826,18</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Net Revenue</h2>
                        <p>usd 798.585,55</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Cost of Goods</h2>
                        <p>usd 714.949,30</p>
                    </div>
                    <div className="bg-cyan-400 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Margin</h2>
                        <p>usd 33.937,23</p>
                    </div>
                    <div className="bg-green-500 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Other Costs</h2>
                        <p>usd 331,10</p>
                    </div>
                    <div className="bg-red-500 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Warehousing</h2>
                        <p>usd 1.600,09</p>
                    </div>
                    <div className="bg-orange-500 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Freight of Transportation</h2>
                        <p>usd 47.767,82</p>
                    </div>
                    <div className="bg-purple-500 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Margem Média Bruta</h2>
                        <p>18,58 %</p>
                    </div>
                </div>

                {/* Tabela e Pizza Gráfica */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Log Clientes</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full mb-6">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border px-4 py-2">Client</th>
                                        <th className="border px-4 py-2">Volume</th>
                                        <th className="border px-4 py-2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">Sun Energy</td>
                                        <td className="border px-4 py-2">1000</td>
                                        <td className="border px-4 py-2">400</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Sister Quimica</td>
                                        <td className="border px-4 py-2">500</td>
                                        <td className="border px-4 py-2">380</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Sp Quim</td>
                                        <td className="border px-4 py-2">400</td>
                                        <td className="border px-4 py-2">389</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
                        <Pie data={dataJanuary} options={options} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default MetDash;
