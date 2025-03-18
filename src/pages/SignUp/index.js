import Logo from '../../assets/image/logo.png';
import { MyContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import patern from '../../assets/image/patern.jpeg';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
// import { Button } from 'bootstrap';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoMdHome } from "react-icons/io";
import  logo  from '../../assets/image/logo.png';

const SignUp= () =>{
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);


    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
        window.scrollTo(0,0);

        document.title = "Sign Up";

        const favicon = document.querySelector("link[rel='icon']");
        favicon.href = logo;  
    }, []);


    const focusInput=(index)=>{
        setInputIndex(index);
    }

    return (
        <>
            <img src={patern} className='logoPatern' alt="Pattern" />
            <section className="loginSection signUpSection">

                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center flex-column justify-content-center part1'>
                        <h1>BEST UX/UI FASHION
                            <span className='text-sky'> ECOMMERCE DASHBORD</span>  & ADMIN PANEL</h1>
                        
                        <p style={{color: 'black'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type 
                         specimen book. It has survived not only five centuries, but also the leap into electronic 
                         typesetting, remaining essentially unchanged. 
                        </p>

                        <div className='w-100 mt-4'>
                            <Link to={'/'}>
                                 <Button className='goHome btn-blue btn-lg btn-big'> <IoMdHome /> Go to Home</Button>
                            </Link>

                        </div>



                    </div>

                    <div className='col-md-4 pr-0'>
                        <div className="loginBox">
                            <div className='logo text-center'>
                                <img src={Logo} width="60px"></img>
                                <h5 className='font-weight-bold'>Register a new account </h5>
                            </div> 

                            <div className='wrapper wrappersignup mt-3 border p-4'>
                                <form>

                                    <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                                        <span className='icon' ><FaRegUserCircle /></span>
                                        <input type='text' className='form-control' placeholder='Username' 
                                        onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} />
                                    </div>

                                    <div className={`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                                        <span className='icon' ><MdEmail /></span>
                                        <input type='text' className='form-control' placeholder='Email' 
                                        onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)} />
                                    </div>

                                    <div className={`form-group mb-3 position-realtive ${inputIndex===2 && 'focus'}`}>
                                        <span className='icon' ><RiLockPasswordFill /></span>
                                        <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='Password' 

                                        onFocus={()=>focusInput(2)} onBlur={()=>setInputIndex(null)} />

                                        <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === true ?  <IoMdEye /> : <IoMdEyeOff /> 
                                            }
                                        
                                        </span>
                                    </div>

                                    <div className={`form-group mb-3 position-realtive ${inputIndex===3 && 'focus'}`}>
                                        <span className='icon' ><IoShieldCheckmark /></span>
                                        <input type={`${isShowConfirmPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='Confirm Password' 

                                        onFocus={()=>focusInput(3)} onBlur={()=>setInputIndex(null)} />

                                        <span className='toggleShowPassword' onClick={()=>setisShowConfirmPassword(!isShowConfirmPassword)}>
                                            {
                                                isShowConfirmPassword === true ?  <IoMdEye /> : <IoMdEyeOff /> 
                                            }
                                        
                                        </span>
                                    </div>

                                    <FormControlLabel control={<Checkbox />} 
                                    label="I agree to the all Terms & Conditions" />
                                    

                                    <div className='form-group'>
                                        <Link to='/'>
                                            <Button 
                                                className="btn-blue btn-lg w-100 btn-big" 
                                                onClick={()=>context.setIsLogin(!context.isLogin)}
                                            >Sign Up
                                            </Button>
                                        </Link>
                                    </div>

                                    


                                    <div className='form-group text-center mt-2'>
                                        {/* <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link> */}
                                        
                                        <div className='d-flex align-items-center justify-content-center mt-3 mb-3 or'>
                                            <span className='line'></span>
                                            <span className='txt'>or</span>
                                            <span className='line'></span>
                                        </div>


                                        <Button variant='outlined' className='w-100 btn-lg btn-big loginWithGoogle'>
                                        <img src='https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png ' className='googleicon' /> sign in with google
                                        </Button>
                                    
                                    </div>


                                </form>

                                <div className='text-center d-block mt-3'>
                                    don't have an account ?
                                    <Link to={'/login'} className='link color ms-2'>Sign In</Link>
                                </div>

                            </div>

                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}



export default SignUp;