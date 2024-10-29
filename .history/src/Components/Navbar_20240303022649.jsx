
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';
import moon from '../assets/icons/moon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="headercontainer">

                <Link   to='/' className="logoclass">

                    <img src={logo} height="40px" width="40px" alt="" />
                    <p>Gharsallah</p>

                </Link>
                <ul id="navbarlist">
                    <li><Link exact to="/" >Home</Link></li>
                    <li><Link to="/About" >About Me</Link></li>
                    <li><Link to="/projects" >Projects</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>

                </ul>
                <span className="nuitbtn">

                    <button><img src={moon} alt="" /></button>
                </span>
            </div>
            <hr />

        </>


    );
};
export default Navbar;