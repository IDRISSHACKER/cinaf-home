import React from "react";
import { AppBar } from "@mui/material";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Container from "../../components/Container";
import { motion } from "framer-motion"
import menu from "./../../asset/menu.png"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Scroll from 'react-scroll-to-element';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Navbar() {
    const [active, setActive] = React.useState(false)

    const handleMenu = ()=>{
        setActive(!active)
        console.log("menu")
    }

    React.useEffect(()=>{
        setTimeout(()=>{
            console.log(window.location.href)
        },100)
    }, [])

    return (
        <div>
            <div className="navbar">
                    <div className="navbar-body">
                        <div className="navbar-brand">
                            <a href="#">
                                <img className="cinafIcon" src="favicon.ico" alt="favicon of cinaf" />
                            </a>
                        </div>
                        <div className="navbar-links hideMobile">
                        <Scroll type="id" element="home">
                            <button  className="link">Acceuil</button>
                        </Scroll>
                        <Scroll type="id" element="services">
                            <button className="link">Nos services</button>
                        </Scroll>
                        <Scroll type="id" element="investissement">
                            <button className="link">Investir</button>
                        </Scroll>
                        </div>
                        <div className="navbar-footer hideMobile">
                            {/*<a href="https://apps.cinaf.tv/download" className="btn btn-lg btn-primary-outlined btn-navbar radius">
                                <div className="btn-text">s'abonner</div>
                                <div className="btn-icon">
                                    <AccountCircleOutlinedIcon />
                                </div>
                             </a>*/}
                            <a href="#" className="btn btn-primary btn-lg btn-navbar radius">
                                <div className="btn-text">Investir</div>
                                <div className="btn-icon">
                                    <CurrencyExchangeOutlinedIcon />
                                </div>
                            </a>
                        </div>
                        <motion.div 
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="navbar-menu showMobile">
                            <div className="active-menu">
                                <IconButton color={"inherit"} aria-label="close menu" onClick={handleMenu}>
                                    <MenuOutlinedIcon style={{color:"white"}} />
                                </IconButton>
                            </div>
                        </motion.div>
                    </div>
            </div>
            <div className={`menu-area ${active ? "menu-active" : null}`}>
                <motion.div
                className="menu">
                    <div className="menuContent">
                        <div className="menuHead">
                           <div className="menuLogo">
                                <img src="favicon.ico" alt="favicon of cinaf" className="cinafIcon" />
                           </div>
                           <div className="closeMenu">
                                <IconButton color="primary" aria-label="close menu" onClick={handleMenu}>
                                    <CloseIcon className="closeIcon" />
                                </IconButton>
                           </div>
                        </div>
                        <div className="menuItems">
                            <a href="#home" className="menuItem" onClick={handleMenu}>
                                <div>
                                    <div className="menuItemIcon">
                                        <HomeOutlinedIcon />
                                    </div>
                                    <div className="menuItemTex">
                                        <span>Acceuil</span>
                                    </div>
                                </div>
                            </a>
                                <a href="#services" className="menuItem" onClick={handleMenu}>
                                <div>
                                    <div className="menuItemIcon">
                                        <ShopOutlinedIcon />
                                    </div>
                                    <div className="menuItemTex">
                                        <span>Nos services</span>
                                    </div>
                                </div>
                            </a>
                                <a href="#investissement" className="menuItem" onClick={handleMenu}>
                                <div>
                                    <div className="menuItemIcon">
                                        <CurrencyExchangeOutlinedIcon />
                                    </div>
                                    <div className="menuItemTex">
                                        <span>Investir</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="menuFooter">
                        <a href="#" className="btn btn-primary btn-fw">
                            <div className="btn-text">Investir</div>
                            <div className="btn-icon">
                                <CurrencyExchangeOutlinedIcon />
                            </div>
                        </a>
                        <a href="https://cinaf.tv/fr/" className="btn btn-fw">S'abonner à cinaf</a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


export default Navbar
