
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';
import moon from '../assets/icons/moon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="headercontainer">


                <Link to="/">
                    <div className="logoclass">
                        <img src={logo} height="40px" width="40px" alt="" />
                        <span>Gharsallah</span>
                    </div>
                </Link>

                <ul id="navbarlist">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/About" >About Me</Link></li>
                    <li><Link to="/projects" >Projects</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>

                </ul>
                <div class="toggle-button" onclick="toggleTheme()">
                        <i class="fas fa-sun icon sun"></i>
                        <i class="fas fa-moon icon moon"></i>
                        <div class="toggle-circle"></div>
                    </div>                
                    
                    
            </div>
            <hr className="hr-navbar"/>

        </>


    );
};
export default Navbar;