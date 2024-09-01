import './Login.css'
import bg from './image/Vector 1.png'
import Burger from './Burger';
import StepperComponent from './StepperComponent';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaSquarePhone,FaLocationDot,FaArrowRight  } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoEyeOffSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import capcha from './image/captcha (2).png'
import capcha1 from './image/captcha (1).png'
function Login({burger,setlogin}){
    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        navigate('/');
        setlogin(true);
        
    }
    return(
        <div className='register-home'>
            {burger &&
                <Burger/>
            }
            {/* <div className='vector1'>
                <img src={bg} alt="vector1"></img>
            </div> */}
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
                        <form onSubmit={submitHandler} className='form1'>
                            <div className='name-div'>
                                <FaUser className='icon' />
                                <input type="text" placeholder='User name or phone'></input>
                            </div>
                            <div className='name-div'>
                                <RiLockPasswordFill className='icon' />
                                <input type="password" placeholder='Enter password'></input>
                                <IoEyeOffSharp className='iconb' />
                            </div>
                            <div className='name-div'>
                                <img className='icon' src={capcha} alt='capta'></img>
                                <input type="number" placeholder='Enter captch'></input>
                            </div>
                            <div className='captcha-div'>
                                <img className='captcha-img' src={capcha1}></img>
                                <div className='captcha-nub'>5+4</div>

                            </div>
                           
                            <div className='next-div'>
                                <button>Next <FaArrowRight /></button>
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