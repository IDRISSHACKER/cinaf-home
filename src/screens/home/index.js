import React from "react"
import Navbar from './../../layouts/Navbar/index';
import Caroussel from "./Components/Caroussel";
import Services from "./Components/Services";
import Realisaion from "./Components/Realisaion";
import Investir from "./Components/Investir";
import Footer from "../../layouts/Footer";
import Video from "./Components/Video";

function Home(){


    return(
        <div>
            <Navbar />
            <Caroussel />
            <Video />
            <Services />
            <Realisaion />
            <Investir />
            <Footer />
        </div>
    )
}

export default Home
