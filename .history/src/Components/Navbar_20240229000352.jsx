import React from  'react'

function Navbar(){
    return(
        <div>
            <nav>
                <img src="../icons/alilogowhite.png" alt="" id="logo"/>
                <span id="logo-text">Gharsallah</span>
            <ul className='navbar-links'>
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
                <li><button><img src="" alt="" /></button></li>
            </ul>
            </nav>
        </div>

    );
}
export default Navbar;