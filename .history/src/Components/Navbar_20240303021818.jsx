
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';
import moon from '../assets/icons/moon.png';
import {link} from  'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="headercontainer">

                <link  exact to='/' className="logoclass">

                    <img src={logo} height="40px" width="40px" alt="" />
                    <p>Gharsallah</p>

                </link>
                <ul id="navbarlist">
                    <li><link exact to="/" >Home</link></li>
                    <li><link to="/About" >About Me</link></li>
                    <li><link to="/projects" >Projects</link></li>
                    <li><link to="/contact" >Contact</link></li>

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