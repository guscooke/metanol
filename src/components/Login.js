import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const correctUsername = 'admin';
        const correctPassword = '1234';

        if (username === correctUsername && password === correctPassword)
        {
            login();
            navigate('/relatorio');
        } else
        {
            setError('Incorrect username or password');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-800 to-gray-900 sm:flex-row">
            <div className="relative flex items-center justify-center p-8 sm:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613690399151-65ea69478674?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="relative text-4xl font-bold text-white sm:text-6xl animate-fade-in">Methanol Report</h1>
            </div>
            <div className="flex items-center justify-center bg-neutral-300 p-8 sm:w-1/2">
                <div className="bg-neutral-200 p-10 rounded-lg shadow-lg w-full max-w-md border-4 border-gray-700 shadow-neutral-900 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-700"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-700"
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-slate-700"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;



