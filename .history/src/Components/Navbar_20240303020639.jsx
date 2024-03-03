
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';
import moon from '../assets/icons/moon.png';


const Navbar = () => {

    return (
        <>
            <div className="headercontainer">

                <span className="logoclass">
                    <button>
                    <img src={logo} height="40px" width="40px" alt="" />
                    <p>Gharsallah</p>
                    </button>
                </span>
                <ul id="navbarlist">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>

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