
import React from "react";
import "./Navbar.css"
import logo from '../assets/icons/alilogowhite.png';


const Navbar = () => {

    return (
        <div class="headercontainer">
            <span id="mainlogo">
                <img src={logo} alt="" />
                <p>Gharsallah</p>
            </span>
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