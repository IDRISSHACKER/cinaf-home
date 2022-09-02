import React from "react"
import SectionTitle from './../../../components/SectionTitle';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import invest1 from "./../../../asset/invest1.webp"
import invest2 from "./../../../asset/invest2.png"
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import social from "./../../../asset/social.svg"
import distribution from "./../../../asset/distribution.svg"


function Investir(){

    return (
        <div>
            <div className="investir section2" id="investissement">
                <div className="container">
                    <SectionTitle icon={<ContactSupportOutlinedIcon />} title={"Pourquoi investir"} subtitle={"Decouvrez les nombreuses raisons pour lesquels vous devez investir"} />
                    <div className="section-body">
                        <Invest />
                    </div>
                </div>
            </div>
            <div className="investir section3">
                <div className="container">
                    <div className="section-body">
                        <Invest2 />
                        <Invest3 />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Invest() {
    const theme = useTheme();

    return (
        <div className="invest2">
            <Grid container spacing={2} justifyContent="space-between" className="grid">
                <Grid item xs={12} sm={4}>
                    <Typography component="div" variant="h3" className="adapt">
                        UNE NOTORIÉTÉ DANS LES RÉSEAUX SOCIAUX
                    </Typography>
                    <br /><br />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Alors que nous sommes dans un contexte où le digital en général et les réseaux sociaux en particulier constituent un élément fondamental, nous nous sommes forgés une réputation solide, ce qui nous vaut d'être la plateforme officielle du cinéma Camerounais avec plus de 500.000 followers sur l'ensemble de nos réseaux sociaux.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img src={social} alt="social img" className="invest-img"/>
                </Grid>
            </Grid>
        </div>
    );
}

function Invest2() {
    const theme = useTheme();

    return (
        <div className="invest2">
            <Grid container spacing={2} justifyContent="space-between" direction={"row-reverse"} className="grid">
                <Grid item xs={12} sm={4}>
                    <Typography component="div" variant="h3" className="adapt">
                        UN SERVICE DE DISTRIBUTION
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Conscient de la difficulté que rencontre les réalisateurs cinématographiques camerounais, de nos jours, nous nous engageons via ce service à proposer des solutions fiables et concrètes au problème de la distribution.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img src={distribution} alt="social img" className="invest-img" />
                </Grid>
            </Grid>
        </div>
    );
}

function Invest3() {
    const theme = useTheme();

    return (
        <div className="invest getStarted">
            <div>
                <img src="https://guihon.cm//asset/media/etoile2.svg" alt="img" />
            </div>
            <h3>On se lance dans l'aventure ?</h3>
            <a href="https://" className="btn btn-primary radius btn-llg">
                <div className="btn-text">Investir</div>
                <div className="btn-icon">
                    <CurrencyExchangeOutlinedIcon />
                </div>
            </a>
        </div>
    );
}
export default Investir

