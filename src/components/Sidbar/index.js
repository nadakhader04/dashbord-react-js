import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight ,FaProductHunt ,FaFacebookMessenger } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import SearchBox from '../SearchBox';
import { MyContext } from '../../App';
// import { OpenContext } from '../../pages/Messenger/index.js';


const Sidbar = () =>{

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
    const context = useContext(MyContext);
    
    

    const isOpenSubmenu=(index)=>{
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);

    }
    return(
        <>
            <div className="sidebar">
                <ul>

                    <li>
                        <div className='searchbar w-100 mb-3'><SearchBox/></div>
                    </li>

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                                <span className='icon'><MdDashboard/> </span>
                                Dashbord
                                <span className='arrow'> <FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button className={`w-100 ${activeTab===1 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt/> </span>
                            Products
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWapper ${activeTab === 1 && isToggleSubmenu===true ? 'collapse' : 'collapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/product/list">Products List</Link></li>
                                <li><Link to="/product/view">Products View</Link></li>
                                <li><Link to="#">Products Upload</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                                    <span className='icon'><FaCartArrowDown/> </span>
                                    Orders
                                    <span className='arrow'> <FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button className='m-100'  onClick={()=> context.setThemeMode(!context.themeMode)}>
                            {
                               context.themeMode ===true ? <span className='icon'><MdDarkMode/> </span>  : <span className='icon'><MdOutlineLightMode/> </span>
                            }
                            {
                               context.themeMode ===true ? <span> Dark Mode</span> : <span> Light Mode</span>
                            }
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Link to="/">
                        {/*  onClick={()=>isOpenSubmenu(4)} */}
                        <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`}>
                            <span className='icon'><IoIosNotifications/> </span>
                            Notificarions
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                        </Link>
                    </li>


                    <li>
                        <Link to="/">
                        <Button
                            className={`w-100 ${activeTab===5 ? "active" : ""}`}
                            onClick={() => context.setIsMessenger(!context.isMessenger)}

                        >
                            <span className="icon"> <FaFacebookMessenger /></span>
                             Messenger
                            <span className="arrow"> <FaAngleRight /> </span>
                        </Button>
                        </Link>
                    </li>



                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===6 ? 'active' : ''}`}>
                                <span className='icon'><MdMarkEmailUnread/> </span>
                                Email
                                <span className='arrow'> <FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`}>
                                <span className='icon'><IoSettingsSharp/> </span>
                                Settings
                                <span className='arrow'> <FaAngleRight/></span>
                            </Button>
                        </Link>
                    </li>


                    {/* <li>
                        <Button className='m-100'>
                            <span className='icon'><FaFacebookMessenger/> </span>
                            Messg
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><IoIosNotifications/> </span>
                            Notificarions
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><IoSettingsSharp/> </span>
                            Settings
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><MdDashboard/> </span>
                            Dashbord
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><FaProductHunt/> </span>
                            Products
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><FaCartArrowDown/> </span>
                            Orders
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><FaFacebookMessenger/> </span>
                            Messg
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><IoIosNotifications/> </span>
                            Notificarions
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><IoSettingsSharp/> </span>
                            Settings
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>


                    <li>
                        <Button className='m-100 '>
                            <span className='icon'><MdDashboard/> </span>
                            Dashbord
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><FaProductHunt/> </span>
                            Products
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><FaCartArrowDown/> </span>
                            Orders
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><FaFacebookMessenger/> </span>
                            Messg
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><IoIosNotifications/> </span>
                            Notificarions
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li>

                    <li>
                        <Button className='m-100'>
                            <span className='icon'><IoSettingsSharp/> </span>
                            Settings
                            <span className='arrow'> <FaAngleRight/></span>
                        </Button>
                    </li> */}

                   
                </ul>

                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant='contained'><IoLogOutOutline />Logout</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidbar;