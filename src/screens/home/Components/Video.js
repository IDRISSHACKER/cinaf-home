import React from "react"
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

function Video(){

    return <div className="video">
        <div className="container">
            <div className="video-frame">
                <div className="video-desk">
                    <h2>Cinaf investissement</h2>
                    <p>CINAF Investissement est la plateforme numérique 100% camerounaise qui a pour but de développer le secteur entrepreneurial local.</p>
                    <a href="#" className="btn btn-primary radius btn-llg">Investir</a>
                </div>
                <div className="video-content">
                    <div className="video-frame-content">
                        <div className="video-play-button">
                            <div className="video-stroke">
                                <PlayCircleFilledOutlinedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Video
