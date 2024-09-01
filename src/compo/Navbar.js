import logo from './image/AICTE Logo 1.png'
import vector from './image/Vector 4.png'
import logotext from './image/AICTE Logo3 1.png'
import vector3 from './image/Vector 3.png'
import './Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Navbar({clickBurger,islogin,setislogin}){
    
    const navigate = useNavigate();
    
    function BurgerHandler(){
        clickBurger()
    }
    function RegisterHandler(){
        navigate('./Register');
    }
    function LoginHandler(){
        navigate('./login');
    }
    function logoHandler(){
        navigate('/')
    }
    function LogoutHandler(){
        navigate('/');
        setislogin(false);
    }
    return(
        <div className='NavMain'>
            <div className='Navchild'>
                <img className='vector' src={vector} alt='vector'></img>
                <div className='logo-div'>
                    <img className='logo' src={logo} alt='logo' onClick={logoHandler}></img>
                    <img className='logo-text' src={logotext} alt='logo-text'></img>
                </div>
            </div>
            <div className='Nav-right-child'>
                <img className='vector3' src={vector3} alt='vector3'></img>
                <div className='nav-right-div'>
                    <div className='nav-btn'>
                        {!islogin && <button className='button1' onClick={LoginHandler}>Login</button>}
                        {islogin && <button className='button1' onClick={LogoutHandler}>Logout</button>}
                        {!islogin && <button className='button1' onClick={RegisterHandler}>Register</button>}
                        {islogin && <button className='button1'>Dashboard</button>}
                    </div>
                    <div className='burger'>
                        <div className='burger-child' onClick={BurgerHandler}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Navbar;