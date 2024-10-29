import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Projects from './Components/Projects.jsx';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import './main.css';

function MainApp(){
    return(
        <>
        <Navbar/>
        <div>
        <Router>
            <Route exact path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/projects" Component={Projects}/>
            
        </Router>
        </div>
        </>
    );



}

export default MainApp;