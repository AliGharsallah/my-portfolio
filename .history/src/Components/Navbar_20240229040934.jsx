import React from  'react'

function Navbar(){
    return(
        <div>
            <nav>
                <img src="../Icons/alilogowhite.png" alt="../Icons/alilogowhite.png" />
                <span id="logo-text">Gharsallah</span>
            <ul className='navbar-links'>
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
                <li><button><img src="" alt="" /><img src="../Icons/moon.png" alt="" /></button></li>
            </ul>
            </nav>
        </div>

    );
}
export default Navbar;