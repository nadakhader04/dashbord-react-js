import React, { useState, useEffect, useContext } from "react";
import DashbordBox from "./components/DashbordBox";
import { FaUserCircle } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { IoTimerOutline } from "react-icons/io5"; 
import { Button, Menu, MenuItem } from "@mui/material";
import { Chart } from "react-google-charts";
import  logo  from '../../assets/image/logo.png';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  export const options = {
    backgroundColor: 'transparent',
    chartArea: { width: '100%', height: '80%' },
  };

const Dashbord =() =>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [catBy, setCatBy] = useState('');
    const [brandBy, setbrandBy] = useState('');
    const [searchBy, setSearchBy] = useState('');


    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);
        window.scrollTo(0,0);
    })

    useEffect(() => {
        document.title = "Shadore";

        const favicon = document.querySelector("link[rel='icon']");
        // if (favicon) {
        favicon.href = logo; 
        // }

      }, []);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
         setAnchorEl(null);
    };

    const handleChange = (event) => {
        setShowBy(event.target.value);
    };
   
    const deleteRow = (event) => {
        event.target.closest("tr").remove();
    };
      

   
    return(
        <>
            <div className="right-content w-100">
                <div className="row dashbordBoxWrapperRow">
                    <div className="col-md-7">
                        <div className="dashbordBoxWrapper d-flex">
                            <DashbordBox text={["Total User", "277", "95%"]} color={["#1da256", "#48d483"]} icon={<FaUserCircle/>} back={<BiTrendingUp/>}/>
                            <DashbordBox text={["Total Orader", "338", "30%"]} color={["#c012e2", "#eb64fe"]} icon={<IoIosCart/>} back={<BiTrendingDown/>}/>
                            <DashbordBox text={["Total Products", "558", "25%"]} color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} back={<BiTrendingDown/>}/>
                            <DashbordBox text={["Total Reviews", "166", "45%"]} color={["#e1950e", "#f3cd29"]} icon={<BsStars/>} back={<BiTrendingUp/>}/>
                        </div>
                    </div>

                <div className="col-md-5 pl-0">
                    <div className="box graphBox">
                        <div className="d-flex align-item-center w-100 bottomEle">                
                            <h4>Total Sales</h4>

                            <div className="ml-auto">
                                <Button className="ml-auto toggleIcon" onClick={handleClick}>
                                    <HiDotsVertical/>
                                </Button>

                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                    paper: {
                                        style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                        },
                                    },
                                    }}
                                >
                                <MenuItem onClick={handleClose}><IoTimerOutline className="me-1"/> Last Day</MenuItem>
                                <MenuItem onClick={handleClose}><IoTimerOutline className="me-1"/> Last Week</MenuItem>
                                <MenuItem onClick={handleClose}><IoTimerOutline className="me-1"/> Last Month</MenuItem>
                                <MenuItem onClick={handleClose}><IoTimerOutline className="me-1"/> Last Year</MenuItem>
                                    
                                </Menu>
                            </div>
                        </div>
                        <h3 className="text-white font-weight-bold"> $465,768,798</h3>
                        <p>$3,458,23 in last month</p>



                        <Chart
                            chartType="PieChart"
                            loader={<div>Loading Chart...</div>}
                            width="100%"
                            height="180px"
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
                </div>




                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>


                     <div className="row cardFilters mt-3">
                        
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={catBy}
                                    onChange={(e)=>setShowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={catBy}
                                    onChange={(e)=>setCatBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <div className="col-md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={brandBy}
                                    onChange={(e)=>setbrandBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>


                        <div className="col-md-3">
                            <h4>SEARCH BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={searchBy}
                                    onChange={(e)=>setSearchBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                    <tr>
                                        <td>#1</td>
                                        <td>
                                            <div className="d-flex align-item-center productBox w-auto">
                                                <div className="imgWrapper">
                                                    <div className="img">
                                                        <img src="https://i.pinimg.com/736x/33/62/bb/3362bbf15c211906e376713e12f38fbf.jpg" className="w-100"/>
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <h6>Elegant Women's Summer Skirt...</h6>
                                                    <p> women's exclusive summer tops and skirt set for female top and skirt set</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Women's Clothing</td>
                                        <td>Fashion House</td>
                                        <td>
                                            <div style={{width: '70px'}}>
                                                <del className="old">$21.0</del>
                                                <span className="new text-danger">$19.0</span>
                                            </div>
                                        </td>
                                        <td>In Stock</td>
                                        <td>%68</td>
                                        <td>380</td>
                                        <td>39</td>
                                        <td>
                                            <div className="actions d-flex align-items-center" > 
                                                <Link to="/product/details">
                                                    <Button className="secondary" color="secondary" style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}>< MdOutlineRemoveRedEye/> </Button>
                                                </Link>
                                                <Button className="success" color="success"><IoPencil /></Button>
                                                <Button className="error" color="error"
                                                    onClick={deleteRow}><MdDelete /></Button>


                                            </div>
                                        </td>
                                    </tr>

                                 <tr>
                                    <td>#2</td>
                                    <td>
                                        <div className="d-flex align-item-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://i.pinimg.com/736x/92/b5/aa/92b5aa81653ea91b455d034267144916.jpg" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Summer Top for Women...</h6>
                                                <p> women's exclusive summer tops and skirt set for female top and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's Clothing</td>
                                    <td>Style Wear</td>
                                    <td>
                                        <div style={{width: '70px'}}>
                                            <del className="old">$49.0</del>
                                            <span className="new text-danger">$39.0</span>
                                        </div>
                                    </td>
                                    <td>In Stock</td>
                                    <td>%88</td>
                                    <td>254</td>
                                    <td>68</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary" style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}>< MdOutlineRemoveRedEye/> </Button>
                                            </Link>                                            
                                            <Button className="success" color="success"><IoPencil /></Button>
                                            <Button className="error" color="error" onClick={deleteRow}> <MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                            
                        </table>

                        
                            
                        <div className="d-flex tableFooter">
                            <p>showing <b>6</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton/>
                        </div>
                                
                    </div>

                </div>


            </div>
    </>
    )
}
export default Dashbord;