import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="container-fluid bg-primary   d-flex justify-content-center" >

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
