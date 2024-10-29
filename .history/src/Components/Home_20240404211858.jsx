import React from 'react';
import './Home.css';
import linkedinlogo from '../assets/icons/linkedin.png';
import githublogo from '../assets/icons/github.png';
import twitterlogo from '../assets/icons/twitter.png';
import telegramlogo from '../assets/icons/telegram.png';
import instalogo from '../assets/icons/instagram.png';
import bottomarrow from '../assets/icons/Bottom-arrow.png';
const Home = () => {
    return (

        <div className='container'>

            <div>
                <span className='Hithere'>
                    Hi There ,
                </span>
                <br />
                <span className='hithere'>
                    I'm Ali <span className='myname'>Gharsallah
                    </span>
                </span>

            </div>


            <div>

                    
            <button class="button-52" role="button">

                            About Me
                            <img src={bottomarrow} alt="" />
                        </button>


            </div>

            <div className='social'>
                <div><img src={linkedinlogo} alt="" /></div>
                <div><img src={githublogo} alt="" /></div>
                <div><img src={twitterlogo} alt="" /></div>
                <div><img src={telegramlogo} alt="" /></div>
                <div><img src={instalogo} alt="" /></div>

            </div>

        </div>
    );
};
export default Home;