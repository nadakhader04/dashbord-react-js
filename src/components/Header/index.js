import '../../App.css';
import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import  logo  from '../../assets/image/logo.png';
import medium from '../../assets/image/medium.webp';
import image1 from '../../assets/image/policorn.jpeg'; 
import image2 from '../../assets/image/Aqsa_.jpeg';
import image3 from '../../assets/image/TURKEY.jpeg';
import image4 from '../../assets/image/logo12.jpg';
import image5 from '../../assets/image/flower.jpeg';
import image6 from '../../assets/image/man.jpeg';
import Button from '@mui/material/Button';
import { MdMenuOpen, MdOutlineSwapHorizontalCircle } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

import img from '../../assets/image/img1.jpg'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { FaShieldAlt } from "react-icons/fa";
import { MyContext } from '../../App';
import UserAvatarImg from '../UserAvatarImg/indix';


const Header=()=>{

    const [anchorEl, setAnchorEl] =  useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
    const openMyAcc = Boolean(anchorEl);
    const openNotification = Boolean(notificationAnchorEl);
    const context = useContext(MyContext);
    
    const handleCloseNotificationsDrop = () => {
        setNotificationAnchorEl(null);
    };
    const handleCloseMyAccDrop = () => {
      setAnchorEl(null); 
    };


    const handleToggleNotificationsDrop = (event) => {
        if (notificationAnchorEl) setNotificationAnchorEl(null); 
        else setNotificationAnchorEl(event.currentTarget);
    };

    const handleToggleMyAccDrop = (event) => {//close --> null --> false
        if (anchorEl) setAnchorEl(null); 
        else setAnchorEl(event.currentTarget); 
    };
    return(
        
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row align-items-center w-100 ">
                    {/* Logo */}
                    <div className="part1">
                        <Link to="/" className="d-flex align-items-center logo"> 
                            <img src={logo} alt="Logo" />
                            <span className="ml-3 mt-4">Shadore</span>
                        </Link>
                    </div>

                    


                    {/* Menu Button */}
                    <div className="part2 align-items-center">
                        <Button
                            className="rounded-circle"
                            onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}
                        >
                            {
                                context.isToggleSidebar === false ? <MdMenuOpen /> : <FaBarsStaggered />
                            }
                        
                            
                        </Button>

                        <SearchBox className="searchBox"></SearchBox>
                    </div>

                    
                    <div className="part3 d-flex align-items-center justify-content-right">
                        <div className='part03 align-items-center gap-2'>
                            <Button className="rounded-circle mr-3" onClick={()=>
                                context.setThemeMode(!context.themeMode)}> <MdOutlineLightMode /> 
                            </Button> 

                            <Button className="rounded-circle mr-3"> <AiOutlineShoppingCart /></Button>  
                            <Button className="rounded-circle mr-3"> <MdOutlineEmail /> </Button>  

                            <div className='dropdoenWrapper position-relative'>
                                <Button className="rounded-circle mr-3" onClick={handleToggleNotificationsDrop}> <FaRegBell /> </Button>  

                                <Menu
                                        anchorEl={notificationAnchorEl}
                                        className='notificarions dropdown_list'
                                        id="notificarions"
                                        open={openNotification}
                                        onClose={handleCloseNotificationsDrop}                                    
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        
                                    >
                                        <div className='head pb-0'>
                                            <h4 style={{paddingLeft:'10px'}}>Orders (12)</h4>
                                        </div>

                                        <Divider className='mb-1'/>

                                    <div className='scroll'>
                                        <MenuItem onClick={handleCloseNotificationsDrop}>

                                            <div style={{marginBottom: '40px'}}>
                                                <div className='userImg d-flex align-items-center'>
                                                    <span className='rounded-circle'>
                                                        <img src='https://i.pinimg.com/736x/d4/fd/e8/d4fde837765f365f2d76f6bc406b4cb0.jpg'></img>
                                                    </span>
                                                </div>
                                            </div>
                                            

                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b> Duha Rabaya</b>added to his favorite list
                                                        <b>Leather bolt stave madden</b>
                                                    </span>

                                                    <p className='text-sky'>few second age</p>
                                                </h4>
                                            </div>
                                            
                                        </MenuItem>


                                        <MenuItem onClick={handleCloseNotificationsDrop}>

                                            <div style={{marginBottom: '40px'}}>
                                                <div className='userImg d-flex align-items-center'>
                                                    <span className='rounded-circle'>
                                                        <img src={image1}></img>
                                                    </span>
                                                </div>
                                            </div>


                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                    <b>Hanan Awad</b>liked your post titled <b>“Summer Vacation Plans”</b>

                                                    </span>

                                                    <p className='text-sky'>1 age</p>
                                                </h4>
                                            </div>

                                            </MenuItem>


                                            <MenuItem onClick={handleCloseNotificationsDrop}>

                                            <div style={{marginBottom: '40px'}}>
                                                <div className='userImg d-flex align-items-center'>
                                                    <span className='rounded-circle'>
                                                        <img src={image2}></img>
                                                    </span>
                                                </div>
                                            </div>


                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                    <b>Noor Sa'ed</b>invited you to the event <b>"Beach Party 2025"</b>

                                                    </span>

                                                    <p className='text-sky'>1 age</p>
                                                </h4>
                                            </div>

                                            </MenuItem>


                                            <MenuItem onClick={handleCloseNotificationsDrop}>

                                            <div style={{marginBottom: '40px'}}>
                                                <div className='userImg d-flex align-items-center'>
                                                    <span className='rounded-circle'>
                                                        <img src={image4}></img>
                                                    </span>
                                                </div>
                                            </div>


                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                    <b> besan raddad</b>liked your comment on <b>"10 Best Beaches in the World"</b>

                                                    </span>

                                                    <p className='text-sky'>3 age</p>
                                                </h4>
                                            </div>

                                            </MenuItem>


                                            <MenuItem onClick={handleCloseNotificationsDrop}>

                                            <div style={{marginBottom: '40px'}}>
                                                <div className='userImg d-flex align-items-center'>
                                                    <span className='rounded-circle'>
                                                        <img src={image3}></img>
                                                    </span>
                                                </div>
                                            </div>


                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                    <b>Alex Turner</b>sent you a friend request.
                                                    </span>

                                                    <p className='text-sky'>5 age</p>
                                                </h4>
                                            </div>

                                            </MenuItem>


                                            <MenuItem onClick={handleCloseNotificationsDrop}>

                                            <div style={{marginBottom: '40px'}}>
                                                <div className='userImg d-flex align-items-center'>
                                                    <span className='rounded-circle'>
                                                        <img src={image6}></img>
                                                    </span>
                                                </div>
                                            </div>


                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                    <b>Amy Harris</b>tagged you in a photo: <b>"Fun at the beach!"</b>

                                                    </span>

                                                    <p className='text-sky'>19 age</p>
                                                </h4>
                                            </div>

                                            </MenuItem>


                                            <MenuItem onClick={handleCloseNotificationsDrop}>

                                            <div style={{marginBottom: '40px'}}>
                                                <div className='userImg d-flex align-items-center'>
                                                    <span className='rounded-circle'>
                                                        <img src={image5}></img>
                                                    </span>
                                                </div>
                                            </div>


                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                    <b>Chris Martin</b>started following you.

                                                    </span>

                                                    <p className='text-sky'>2 day</p>
                                                </h4>
                                            </div>

                                            </MenuItem>

                                            </div>

                                        <div className='pl-3 pr-3 w-100 pt-3'>
                                        <Button className='btn-blue w-100'>View all notificarions</Button>
                                        </div>

                                </Menu>
                            </div>
                       
                        </div>

                        {
                            context.isLogin !== true ? 
                            <Link to={'/login'}>
                                <Button className='btn-blue btn-lg btn-round Sing_in'>Sign In</Button> 
                            </Link>
                            :                     
                            <div className="myAccWraooer d-flex"  onClick={handleToggleMyAccDrop}>
                                <Button className='myAcc d-flex align-items-center'>
                                
                                    <UserAvatarImg img={img}/>

                                    <div  className="userInfo" style={{paddingLeft : '10px'}}>
                                        <h4>Nada Khader</h4>
                                        <p className='mb-0'>@nadakhader04</p>
                                    </div>

                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={openMyAcc}
                                        onClose={handleCloseMyAccDrop}
                                    
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                    
                                        <Divider />
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My account
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <FaShieldAlt />
                                        </ListItemIcon>
                                        Reset Password
                                        </MenuItem>
                                        <MenuItem 
                                            onClick={() => {
                                                handleCloseMyAccDrop(); 
                                                context.setIsLogin(!context.isLogin); 
                                            }}
                                        >
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                        </MenuItem>
                                    </Menu>

                                </Button>
                            </div>

                        }
                    </div> 

                </div>
            </div>
        </header>
    )
}
export default Header;