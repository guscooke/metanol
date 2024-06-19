import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const dataJanuary = {
    labels: ['Volume', 'Net Revenue', 'Cost of Goods', 'Margin', 'Other Costs', 'Warehousing', 'Freight of Transportation', 'Margem Média Bruta'],
    datasets: [
        {
            label: 'Maio',
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
            borderColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
            ],
            borderWidth: 1,
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
    scales: {
        x: {
            beginAtZero: true, // Adjust as needed
        },
        y: {
            indexAxis: 'y',
            beginAtZero: true,
        },
    },
};

// Data for the FOB Houston line chart
const dataFobHouston = {
    labels: ['June', 'July'],
    datasets: [
        {
            label: 'Index',
            data: [342.48, 339.15],
            borderColor: '#36A2EB',
            backgroundColor: '#36A2EB',
            fill: false,
            tension: 0.1,
        },
        {
            label: 'Low',
            data: [339.15, 335.83],
            borderColor: '#FF6384',
            backgroundColor: '#FF6384',
            fill: false,
            tension: 0.1,
        },
        {
            label: 'High',
            data: [345.80, 342.82],
            borderColor: '#FFCE56',
            backgroundColor: '#FFCE56',
            fill: false,
            tension: 0.1,
        },
    ],
};

const optionsFobHouston = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'FOB Houston Overview',
        },
    },
    scales: {
        x: {
            beginAtZero: false, // Adjust as needed
        },
        y: {
            indexAxis: 'x', // Invert Y-axis for this chart
            beginAtZero: true,
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
                    <div className="bg-yellow-400 p-6 rounded-lg shadow-md">
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
                        <h2 className="text-2xl font-bold mb-4 ">Port Transp cost</h2>
                        <p>usd 47.767,82</p>
                    </div>
                    <div className="bg-purple-500 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Gross Average Margin %</h2>
                        <p>18,58 %</p>
                    </div>
                    <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-teal-50">Freight Offer</h2>
                        <p className='text-teal-50'>usd 237,84</p>
                        <p className='text-teal-50'>   CIF Paranagua/Santos: usd 319,84/MT
                        </p>
                    </div>
                </div>

                {/* FOB Houston Table and Line Chart (side by side) */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-4">FOB Houston</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border px-4 py-2">Month</th>
                                        <th className="border px-4 py-2">Index</th>
                                        <th className="border px-4 py-2">Low</th>
                                        <th className="border px-4 py-2">High</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="border px-4 py-2">June</th>
                                        <td className="border px-4 py-2">usd 342,48</td>
                                        <td className="border px-4 py-2">usd 339,15 </td>
                                        <td className="border px-4 py-2">usd 345,80</td>
                                    </tr>
                                    <tr>
                                        <th className="border px-4 py-2">July</th>
                                        <td className="border px-4 py-2">usd 339,15</td>
                                        <td className="border px-4 py-2">usd 335,83</td>
                                        <td className="border px-4 py-2">usd 342,82</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <Line data={dataFobHouston} options={optionsFobHouston} />
                        </div>
                    </div>
                </div>

                {/* Table and Bar Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Tabela</h2>
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
                                        <td className="border px-4 py-2">400</td>
                                        <td className="border px-4 py-2">400</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Sister Quimica</td>
                                        <td className="border px-4 py-2">500</td>
                                        <td className="border px-4 py-2">400</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Sp Quim</td>
                                        <td className="border px-4 py-2">1500</td>
                                        <td className="border px-4 py-2">400</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Gráfico</h2>
                        <Bar data={dataJanuary} options={options} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default MetDash;
