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
            // navigate('/resumo')
        } else
        {
            setError('Incorrect username or password');
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-slate-800 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Methanol Report</h1>
            </div>
            <div className="w-1/2 flex items-center justify-center bg-zinc-700">
                <div className="bg-neutral-200 p-8 rounded-lg shadow-md w-full max-w-md border-4 border-gray-700 shadow-neutral-900">
                    <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-black text-sm font-bold mb-2">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

