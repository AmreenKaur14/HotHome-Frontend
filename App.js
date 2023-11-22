// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import './App.css';
import Permit from './Components/Permit';
import Contact from './Components/Contact';
import Apartment from './Components/Apartment';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/permits" element={<Permit />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </Router>
  );
};

export default App;
