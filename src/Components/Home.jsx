import React from 'react';
import './Home.css';
import linkedinlogo from '../assets/icons/linkedin.png';
import githublogo from '../assets/icons/github.png';
import twitterlogo from '../assets/icons/twitter.png';
import telegramlogo from '../assets/icons/telegram.png';
import instalogo from '../assets/icons/instagram.png';
import bottomarrow from '../assets/icons/Bottom-arrow.png';
import portfoiliophoto from '../assets/images/pp.png';
     
        const Home = () => {
            return (
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
                            <div><img src={linkedinlogo} alt="" /></div>
                            <div><img src={githublogo} alt="" /></div>
                            <div><img src={twitterlogo} alt="" /></div>
                            <div><img src={telegramlogo} alt="" /></div>
                            <div><img src={instalogo} alt="" /></div>
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
            );
        };
        
        export default Home;
