import React from "react"
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import YouTube from 'react-youtube';
import CircularProgress from '@mui/material/CircularProgress';

function Video(){

    const [playing, setPlaying] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const opts = {
        height: 'auto',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    function handleReady(ev) {
        
        setLoading(false)
        ev.target.playVideo();
    }

    function handlePlay() {

        setLoading(true)
        setPlaying(true)
        
    }

    return <div className="video">
        <div className="container">
            <div className="video-frame">
                <div className="video-desk">
                    <h2>Cinaf investissement</h2>
                    <p>CINAF Investissement est la plateforme numérique 100% camerounaise qui a pour but de développer le secteur entrepreneurial local.</p>
                    <a href="#" className="btn btn-primary radius btn-llg">Investir</a>
                </div>
                <div className="video-content" onClick={handlePlay}>
                    {!playing && <div className="video-frame-content">
                        <div className="video-play-button">
                            <div className="video-stroke">
                                <PlayCircleFilledOutlinedIcon />
                            </div>
                        </div>
                    </div>}
                    {playing && <div className="video-frame-youtube">
                        <YouTube videoId="MERYIzzH2xg" opts={opts} onReady={handleReady} />
                    </div>}
                    {loading && <CircularProgress color="primary" />}
                </div>
            </div>
        </div>
    </div>
}

export default Video
