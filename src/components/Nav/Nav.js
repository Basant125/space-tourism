import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import home from '../../assets/home/background-home-mobile.jpg'
const Nav = () => {
    const [show, setShow] = useState(false)
    const drawerWidth = 240
    const handleMenu = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return <div className="nav">
        <div className="nav_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" style={{ zIndex: 99 }}><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            <span className="line_straight"></span>
            <div className="nav_content">
                <ul className="nav_links">
                    <NavLink to="/" className="link">
                        <a><span className="nav_color">00</span> HOME</a>
                    </NavLink>
                    <NavLink to="/destination" className="link">
                        <a><span className="nav_color">01</span> DESTINATION</a>
                    </NavLink>
                    <NavLink to="/crew" className="link">
                        <a><span className="nav_color">03</span> CREW</a>
                    </NavLink>
                    <NavLink to="/technology" className="link">
                        <a><span className="nav_color">04</span> TECHNOLOGY</a>
                    </NavLink>
                </ul>
            </div>
            <div className="ham_burger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" onClick={handleMenu}><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
            </div>
        </div>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                borderBlockColor: 'red',
                // backgroundImage: `url(${home})`,
                position: 'relative',
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={show}
        >
            {/* <Button className="close" onClick={handleClose}> */}
            <CloseIcon className="close_icon" onClick={handleClose} />
            {/* </Button> */}
            <List style={{ marginTop: '40px' }}>
                {['', 'destination', 'crew', 'technology'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                {index % 2 === 0 ? <img src={earth} /> : <MailIcon />}
                            </ListItemIcon> */}
                            <NavLink to={text}>
                                <ListItemText primary={text != '' ? text : 'home'} className="item_text" />
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </div>;
};

export default Nav;
