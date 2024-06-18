import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MetanolPage from './components/MetanolPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/relatorio" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/metanol" element={<PrivateRoute><MetanolPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;



