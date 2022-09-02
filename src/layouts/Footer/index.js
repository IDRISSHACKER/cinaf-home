import { Typography } from "@mui/material"
import React from "react"
import facebook from "./../../asset/facebook.png"
import instagram from "./../../asset/instagram.png"
import twitter from "./../../asset/twitter.png"

function Footer(){
    return <div>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-head">
                    <img src="favicon.ico" alt="favicon" />
                </div>
                <div className="footer-content">
                    <Typography className="location">Akwa-Douala (Cameroun)</Typography>
                    <div className="social">
                        <div className="social-title">
                            <Typography className="follow-title">Nous suivre</Typography>
                        </div>
                        <div className="social-content">
                            <div className="icon">
                                <a href="https://www.facebook.com/cinaftv" target={"_blank"} rel="noreferrer">
                                    <img src={facebook} alt="facebook" />
                                </a> 
                            </div>                           
                            <div className="icon">
                                <a href="https://twitter.com/CinafTv" target={"_blank"} rel="noreferrer">
                                    <img src={instagram} alt="instagram" />
                                </a>   
                            </div>                         
                            <div className="icon">
                            <a href="https://www.instagram.com/cinaf.tv/" target={"_blank"} rel="noreferrer">
                                    <img src={twitter} alt="twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-action">
                    <Typography className="copyrig">©copy 2022 CINAF. All rights reserved.</Typography>
                </div>
            </div>
        </div>
    </div>
}

export default Footer
