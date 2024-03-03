import React from 'react';
import linkedinlogo from '../assets/icons/linkedin.png';
import githublogo from '../assets/icons/github.png';
import twitterlogo from '../assets/icons/twitter.png';
import telegramlogo from '../assets/icons/telegram.png';
import instalogo from '../assets/icons/instagram.png';
const Home = () => {
    return (

        <div>
            <div>
                <span>
                    Hi There , <br />
                    I'm Ali <span>Gharsallah</span>
                </span>
            </div>

            <div>

                <div className='btnborder'></div>
                <button>About Me</button>

            </div>

            <div>

                <div><img src={linkedinlogo} alt="" /></div>
                <div><img src={githublogo}alt="" /></div>
                <div><img src={twitterlogo} alt="" /></div>
                <div><img src={telegramlogo}alt="" /></div>
                <div><img src={instalogo} alt="" /></div>
                
            </div>




        </div>
    );
};
export default Home;