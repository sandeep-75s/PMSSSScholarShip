import './Register.css'
import Burger from './Burger';
import { toast } from 'react-toastify';
import StepperComponent from './StepperComponent';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaSquarePhone,FaLocationDot,FaArrowRight  } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Register({burger,setlogin,allData}){

    const [registerData,setRegisterData] = useState({userName:'',userEmail:'',userPhone:'',userAddress:''})

    function RegisterHandler(e){
        const { name , value} = e.target;
        setRegisterData({...registerData,[name]:value})
    }

    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        navigate('/PMSSSScholarShip');
        toast.success("Register Successfully");
        allData(registerData);
        console.log(registerData);
        setlogin(true);
        
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

                    <div className='register-head'>
                        <StepperComponent/>
                    </div>
                    <div className='register-form'>
                        <form onSubmit={submitHandler} className='form'>
                            <div className='name-div'>
                                <FaUser className='icon' />
                                <input type="text" placeholder='Enter name' onChange={RegisterHandler} value={registerData.userName} name='userName' required></input>
                            </div>
                            <div className='name-div'>
                                <MdEmail className='icon' />
                                <input type="text" placeholder='Enter email' onChange={RegisterHandler} value={registerData.userEmail} name='userEmail' required></input>
                            </div>
                            <div className='name-div'>
                                <FaSquarePhone className='icon' />
                                <input type="text" placeholder='Enter phone no' onChange={RegisterHandler} value={registerData.userPhone} name='userPhone' required></input>
                            </div>
                            <div className='textarea-div'>
                                <FaLocationDot className='icon' />
                                <textarea className='textarea' type="text" placeholder='Enter address' rows="9" cols="41" onChange={RegisterHandler} value={registerData.userAddress} name='userAddress' required></textarea>
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

export default Register;