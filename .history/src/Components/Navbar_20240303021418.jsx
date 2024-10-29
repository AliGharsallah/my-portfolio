
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';
import moon from '../assets/icons/moon.png';


const Navbar = () => {

    return (
        <>
            <div className="headercontainer">

                <link  exact to='/' className="logoclass">

                    <img src={logo} height="40px" width="40px" alt="" />
                    <p>Gharsallah</p>

                </link>
                <ul id="navbarlist">
                    <li><link exact to="/" >Home</a></li>
                    <li><link to="/About" >About Me</a></li>
                    <li><link to="projects" >Projects</a></li>
                    <li><link to="" >Contact</a></li>

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