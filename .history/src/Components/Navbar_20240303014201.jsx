
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';


const Navbar = () => {

    return (
        <>
            <div className="headercontainer">

                <span className="logoclass">
                    <img src={logo} height="40px" width="40px" alt="" />
                    <p>Gharsallah</p>
                </span>
                <ul id="navbarlist">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>

                </ul>
                <span className="modeNuitbtn">

                    <button></button>
                </span>
            </div>
            <hr />

        </>


    );
};
export default Navbar;