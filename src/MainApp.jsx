import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Projects from './Components/Projects.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./main.css";




const MainApp = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div>
                    <Routes>
                        <Route  path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>

                </div>
            </div>
        </Router>
    );

};

export default MainApp;