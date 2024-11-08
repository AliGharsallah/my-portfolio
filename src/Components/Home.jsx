import React from 'react';
import './Home.css';
import Projects from './Projects.jsx';
import linkedinlogo from '../assets/icons/linkedin.png';
import githublogo from '../assets/icons/github.png';
import twitterlogo from '../assets/icons/twitter.png';
import telegramlogo from '../assets/icons/telegram.png';
import instalogo from '../assets/icons/instagram.png';
import bottomarrow from '../assets/icons/Bottom-arrow.png';
import portfoiliophoto from '../assets/images/pp.png';
     
        const Home = () => {
            return (
               <>
                <div className='global-container'>
        
                    <div className='left-part'>
                        <div>
                            <span className='Hithere'>Hi There ,</span>
                            <br />
                            <span className='hithere'>
                                I'm Ali <span className='myname'>Gharsallah</span>
                            </span>
                        </div>
        
                        <div className="btncontainer">
                            <button className="button52" role="button">
                                About Me
                                <img src={bottomarrow} alt="" />
                            </button>
                            <div className='effect'></div>
                        </div>
        
                        <div className='social'>
                            <div><a href="https://www.linkedin.com/in/ali-gharsallah-224477263/"><img src={linkedinlogo} alt="" /></a></div>
                            <div><a href="https://github.com/AliGharsallah"><img src={githublogo} alt="" /></a></div>
                            <div><a href="https://twitter.com/"><img src={twitterlogo} alt="" /></a></div>
                            <div><a href="https://web.telegram.org/"><img src={telegramlogo} alt="" /></a></div>
                            <div><a href="https://www.instagram.com/"><img src={instalogo} alt="" /></a></div>
                        </div>
                    </div>
        
                    <div className='right-part'>
                        <div className='photo-container'>
                            <img src={portfoiliophoto} alt="" className='photo' />
                        </div>
                        <span >WEB</span>
                        <span >DEV</span>
                        <span >ELOP</span>
                        <span >ER</span>
                        <span >DEVELOPER</span>
                        <span >DEVELOPER</span>
                       
                    </div>
                    
                    <div className="languageContainer">
                    <hr/>
                        <div className='langues'>
                   
                        <span>FRA</span>
                        <span>ENG</span>
                        <span>DEU</span>
                        </div>

                        </div>


                  
                </div>
                <Projects/>
                </>
            
            );
        };
        
        export default Home;
