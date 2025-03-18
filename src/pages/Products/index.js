import React, { useState, useEffect, useContext } from "react";
// import DashbordBox from "./components/DashbordBox";
import { FaUserCircle } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { IoTimerOutline } from "react-icons/io5"; 
import { Button, Menu, MenuItem } from "@mui/material";
import { Chart } from "react-google-charts";

import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const Products =()=>{

    
    const deleteRow = (event) => {
        event.target.closest("tr").remove();
    };

    
    return (
        <>
         <div className="right-content w-100">
            <div className="card shadow border-0 p-3 mt-4">
                <div className="table-responsive" >
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
                                                <Button className="secondary" color="secondary"> <MdOutlineRemoveRedEye/> </Button>
                                            </Link>
                                            <Button className="success" color="success"><IoPencil /></Button>
                                            <Button className="error" color="error" onClick={deleteRow}> <MdDelete /></Button>
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

                                <tr>
                                    <td>#3</td>
                                    <td>
                                        <div className="d-flex align-item-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://i.pinimg.com/736x/d6/94/f0/d694f0cd34135acce649fb2949803ef8.jpg" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Summer Top for Women...</h6>
                                                <p> women's exclusive summer tops and skirt set for female top and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's Clothing</td>
                                    <td>COS</td>
                                    <td>
                                        <div style={{width: '70px'}}>
                                            <del className="old">$23.0</del>
                                            <span className="new text-danger">$20.99</span>
                                        </div>
                                    </td>
                                    <td>In Stock</td>
                                    <td>%67</td>
                                    <td>789</td>
                                    <td>46</td>
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
                                <tr>
                                    <td>#4</td>
                                    <td>
                                        <div className="d-flex align-item-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://i.pinimg.com/736x/5b/81/e1/5b81e1ed3d5c012b38e2ff810405b4ff.jpg" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Elegant Women's Summer Skirt......</h6>
                                                <p> women's exclusive summer tops and skirt set for female top and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's Clothing</td>
                                    <td>Palm Angels</td>
                                    <td>
                                        <div style={{width: '70px'}}>
                                            <del className="old">$51.0</del>
                                            <span className="new text-danger">$45.0</span>
                                        </div>
                                    </td>
                                    <td>Out of Stock</td>
                                    <td>%98</td>
                                    <td>87</td>
                                    <td>79</td>
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

                                <tr>
                                    <td>#5</td>
                                    <td>
                                        <div className="d-flex align-item-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://i.pinimg.com/736x/4b/70/03/4b7003a22b4fc87773cc8d4d0b442858.jpg" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Summer Top for Women...</h6>
                                                <p> women's exclusive summer tops and skirt set for female top and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's Clothing</td>
                                    <td>Levi’s</td>
                                    <td>
                                        <div style={{width: '70px'}}>
                                            <del className="old">$15.0</del>
                                            <span className="new text-danger">$10.0</span>
                                        </div>
                                    </td>
                                    <td>Out of Stock</td>
                                    <td>%92</td>
                                    <td>2344</td>
                                    <td>90</td>
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

                                <tr>
                                    <td>#6</td>
                                    <td>
                                        <div className="d-flex align-item-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://i.pinimg.com/736x/db/79/19/db79196aaf11b3e0b5decc02df26006c.jpg" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6>Elegant Women's Summer Skirt......</h6>
                                                <p> women's exclusive summer tops and skirt set for female top and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Women's Clothing</td>
                                    <td>Prada</td>
                                    <td>
                                        <div style={{width: '70px'}}>
                                            <del className="old">$26.0</del>
                                            <span className="new text-danger">$23.0</span>
                                        </div>
                                    </td>
                                    <td>In Stock</td>
                                    <td>%34</td>
                                    <td>456</td>
                                    <td>45</td>
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

                          
                    </div>

             
            </div>
            </div>
        </>
    )
        
}

export default Products;
