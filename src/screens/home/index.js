import React from "react"
import Navbar from './../../layouts/Navbar/index';
import Caroussel from "./Components/Caroussel";
import Services from "./Components/Services";
import Realisaion from "./Components/Realisaion";
import Investir from "./Components/Investir";
import Footer from "../../layouts/Footer";

function Home(){


    return(
        <div>
            <Navbar />
            <Caroussel />
            <Services />
            <Realisaion />
            <Investir />
            <Footer />
        </div>
    )
}

export default Home
