import { HiDotsVertical } from "react-icons/hi";
import React, {useState} from 'react';
import { Button, Menu, MenuItem } from "@mui/material";
import { IoTimerOutline } from "react-icons/io5";



const DashbordBox = (props) =>{

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="dashbordBox" style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
            }}>

            <div className="component">

                <div className="arrow">{props.back}</div>

                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="coll">
                        <h4 className="text-white mb-0">{props.text?.[0]}</h4>
                        <span className="text-white">{props.text?.[1]}</span>
                    </div>

                    <div className="ml-auto"> 
                        {
                            props.icon ? <span className="icon"> {props.icon} </span> : ''
                        }
                    </div>
                </div>
                
                <div className="end d-flex align-item-center">
                    <span className="freq">{props.text?.[2]}</span>
                    <h5 className="text text-white mb-0 mt-0">Lest Month</h5>
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

                
            </div>
        </div>
    )
}

export default DashbordBox;