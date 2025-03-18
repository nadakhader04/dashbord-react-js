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
// import googleIcon from '../../assets/image/google-icon-png';
import  logo  from '../../assets/image/logo.png';

const Login = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);

        document.title = "Login ";
        
        const favicon = document.querySelector("link[rel='icon']");
        favicon.href = logo;         
             
    }, []);


    const focusInput=(index)=>{
        setInputIndex(index);
    }


    return (
        <>
            <img src={patern} className='logoPatern' alt="Pattern" />
            <section className="loginSection">
                <div className="loginBox">
                    <div className='logo text-center'>
                        <img src={Logo} width="60px"></img>
                        <h5 className='font-weight-bold'>Login to </h5>
                    </div> 

                    <div className='wrapper wrapperlogin mt-3 card1 border p-4'>
                        <form>
                            <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className='icon'><MdEmail /></span>
                                <input type='text' className='form-control' placeholder='Enter your Email' 
                                onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} />
                            </div>

                            <div className={`form-group mb-3 position-realtive ${inputIndex===1 && 'focus'}`}>
                                <span className='icon' ><RiLockPasswordFill /></span>
                                <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='Enter your Password' 

                                onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)} />

                                <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword === true ?  <IoMdEye /> : <IoMdEyeOff /> 
                                    }
                                   
                                </span>
                            </div>


                            <div className='form-group'>
                                <Link to='/'>
                                    <Button 
                                        className="btn-blue btn-lg w-100 btn-big"
                                        onClick={()=>context.setIsLogin(!context.isLogin)}
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                            </div>


                            <div className='form-group text-center mt-2'>
                                <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>
                                
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-3 or'>
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                                </div>


                                <Button variant='outlined' className='w-100 btn-lg btn-big loginWithGoogle'>
                                   <img src='https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png ' className='googleicon' style={{color: '#fff'}}/> sign in with google
                                </Button>
                             
                            </div>


                        </form>
                    </div>

                    <div className='wrapper wrapperlogin mt-3 card1 border footer p-3'>
                        <span className='text-center '>
                            don't have an account ?
                            <Link to={'/SignUp'} className='link color ms-2'>Register</Link>
                        </span>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Login;
