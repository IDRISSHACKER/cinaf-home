import React from "react"
import SectionTitle from './../../../components/SectionTitle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import vod1 from "./../../../asset/vod.webp"
import vod2 from "./../../../asset/vod2.webp"
import dev from "./../../../asset/dev.jpg"
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {motion} from "framer-motion"


function Services(){
    return (
        <div className="services section" id={"services"}>
            <div className="container">
                <SectionTitle anim={false} icon={<ShopTwoOutlinedIcon />} title={"Nos services"} subtitle={"Découvrez la large gamme de services offerts par CINAF"} />
                <div className="section-body">
                    <Splide style={{ overflow: "hidden !important" }} aria-label="Services" options={{
                        rewind: true,
                        autoplay: true,
                        perPage: 3,
                        perMove: 3,
                        gap: 15,
                        pagination: false,
                        breakpoints: {
                            623: {
                                perPage: 1,
                                perMove: 1
                            },
                            935: {
                                perPage: 2,
                                perMove: 2
                            },
                            1247: {
                                perPage: 3,
                                perMove: 3
                            }
                        }
                    }}>
                                <SplideSlide>
                                    <Service img={vod2} title={"Vidéo à la démande"} desk={"Conscient de la difficulté que rencontre les réalisateurs cinématographiques camerounais, de nos jours, nous..."} />
                                </SplideSlide>
                                <SplideSlide>
                                    <Service img={vod2} title={"Vidéo à la démande"} desk={"Conscient de la difficulté que rencontre les réalisateurs cinématographiques camerounais, de nos jours, nous..."} />
                                </SplideSlide>
                                <SplideSlide>
                                    <Service img={vod2} title={"Vidéo à la démande"} desk={"Conscient de la difficulté que rencontre les réalisateurs cinématographiques camerounais, de nos jours, nous..."} />
                                </SplideSlide>
                                <SplideSlide>
                                    <Service img={vod2} title={"Vidéo à la démande"} desk={"Conscient de la difficulté que rencontre les réalisateurs cinématographiques camerounais, de nos jours, nous..."} />
                                </SplideSlide>
                            </Splide>
                </div>
            </div>
        </div>
    )
}

function Service({img, title, desk, link}) {
    return (
        <motion.div whileHover={{ scale: 0.90 }} initial={{scale: 0.95}}>
            <Card sx={{ maxWidth: 395 }} className={"selectedCard"}>
                <img src={img} className="imgCrop" alt="apercu" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desk}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Voir plus</Button>
                </CardActions>
            </Card>
        </motion.div>
    );
}


export default Services

