/*import React from 'react';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

import Navbar from './components/NavBar';*/



import React from 'react';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  
    useEffect(() => {
      
      localStorage.clear();
    }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;






