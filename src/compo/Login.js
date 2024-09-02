import './Login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Burger from './Burger';
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {FaArrowRight  } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoEyeOffSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import capcha from './image/captcha (2).png'
import capcha1 from './image/captcha (1).png'
import { useEffect, useState } from 'react';
function Login({burger,setlogin,allData}){
    const navigate = useNavigate();

    const [num1 , setnum1] = useState(0);
    const [num2 , setnum2] = useState(0);
    const [loginData,setLoginData] = useState({userName:'',userPassword:'',userCaptcha:''});

    useEffect(()=>{
        generateCaptcha();
    },[]);

    const generateCaptcha = () => {
        setnum1(Math.floor(Math.random() * 10));
        setnum2(Math.floor(Math.random() * 10));
    };


    function validationHandler(e){
        e.preventDefault();
        if (parseInt(loginData.userCaptcha) === num1 + num2) {
            submitHandler();
        } else {
            toast.warning("Captcha is incorrect");
            generateCaptcha(); // regenerate CAPTCHA if incorrect
        }
    }


    function changeHandler(e){
        const { name , value} = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    function submitHandler(){
        // event.preventDefault();
        console.log(loginData);
        allData(loginData);
        navigate('/PMSSSScholarShip');
        setlogin(true);
        toast.success("Login Successfully");
        
    }
    return(
        <div className='register-home'>
            {burger &&
                <Burger/>
            }
            <div className='image-div'>
                <div className='image-div-child'>
                    <div className='gandhi1'>
                    </div>
                    <div className='gandhi2'>
                        <div className='govt'>

                        </div>
                    </div>
                </div>
                
            </div>
            <div className='register-main-div'>
                <div className='re'>
                    <h2>Login</h2>
                    <div className='register-form'>
                        <form onSubmit={validationHandler} className='form1'>
                            <div className='name-div'>
                                <FaUser className='icon' />
                                <input type="text" placeholder='User name or phone' onChange={changeHandler} value={loginData.userName} name='userName' required></input>
                            </div>
                            <div className='name-div'>
                                <RiLockPasswordFill className='icon' />
                                <input type="password" onChange={changeHandler} placeholder='Enter password' value={loginData.userPassword} name='userPassword' required></input>
                                <IoEyeOffSharp className='iconb' />
                            </div>
                            <div className='name-div'>
                                <img className='icon'  src={capcha} alt='capta'></img>
                                <input type="number" placeholder='Enter captch'onChange={changeHandler} value={loginData.userCaptcha} name='userCaptcha'  required></input>
                            </div>
                            <div className='captcha-div'>
                                <img className='captcha-img' onClick={()=> generateCaptcha()} src={capcha1} alt='captcha img'></img>
                                <div className='captcha-nub'>{num1}+{num2}</div>

                            </div>
                           
                            <div className='next-div'>
                                <button >Next <FaArrowRight /></button>
                            </div>
                        </form>
                        <div className='other'>
                            <div></div>
                            <p>Other Method</p>
                            <div></div>
                        </div>
                        <div className='google-div'>
                            <button ><FcGoogle className='icon1' />Sign up with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;