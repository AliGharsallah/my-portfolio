
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';


const Navbar = () => {

    return (
        <div>
            <img src={logo} alt="" id="mainlogo" />
            <span> Gharsallah</span>
            <ul id="navbarlist">
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
                
            </ul>
            <button>Mode nuit</button>
            
        </div>



    );
};
export default Navbar;