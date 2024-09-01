import vector1 from './image/Vector 1.png'
import './Main.css'
import Sliding from './Sliding';
import modi from './image/modi1.png'
import Burger from './Burger';
import Navbar from './Navbar';
import { useState } from 'react';
import Footer from './Footer';
import { useNavigate   } from 'react-router-dom';
function Main({burger,clickBurger}){
    const navigate = useNavigate();
    function formHandler(){
        navigate('./ScholarshipForm');;
    }
    return (
        <div>
        <div className="Main-header">
            {burger &&
                <Burger clickBurger={clickBurger}/>
            }
            <div className='vector-div'>
                <img className='vector1' src={vector1}></img>
            </div>
            <div className='Main'>
                <div className='main-left'>
                    <div className='main-left-child' onClick={formHandler} >
                        <Sliding/>
                    </div>
                </div>
                <div className='main-right'>
                    <div className='main-right-child'>
                        <div className='blue-ball box'></div>
                        <div className='green-ball box'></div>
                        <div className='yellow-ball box'></div>
                        <img className='modi' src={modi}></img>
                    </div>
                </div>
            </div>
            <div className='notice-div'>
                <div className='notice'>Notice:-</div>
                <marquee className="slide">
                    <ul className='list-ul'>
                        <li>Divyang Yojna Ka Last date kal tak hai</li>
                        <li>Divyang Yojna Ka Last date kal tak hai</li>
                        <li>Divyang Yojna Ka Last date kal tak hai</li>
                    </ul>
                </marquee>
            </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
        </div>
    );
}

export default Main;