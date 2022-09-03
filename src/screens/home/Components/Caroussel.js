import React from "react"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import caroussel1 from "./../../../asset/caroussel1.jpg"
import caroussel2 from "./../../../asset/caroussel2.jpg"
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

function Caroussel(){
    const delay = 42000;
    const [active, setActive] = React.useState(1)

    const timer = setTimeout(()=>{
        clearTimeout(timer)
        active === 3 ? setActive(1) : setActive(active + 1)
    },delay)

    const sliderItems = [
        {
            title: "Roi du streaming",
            title2: "cameounais",
            img: caroussel1,
            link: "#",
            btnText: "A propos"
        },
        {
            title: "Une équipe",
            title2: "dynamique",
            img: caroussel2,
            link: "#",
            btnText: "Nos services"
        },
        {
            title: "Devenir partenaire",
            title2: "Cinaf",
            img: caroussel1,
            link: "#",
            btnText: "Nos services"
        }
    ]


    return (
        <div className="caroussel">
            <div className="carousselBody">
                    {sliderItems.map((item, index) => (
                        <Carous key={`${index}`} isActive={active === 1 && true} title1={item.title} title2={item.title2} img={item.img} link={item.link} btnText={item.btnText} />
                    ))}
            </div>
        </div>
    )
}

function Carous({img, title1, title2, link, btnText, isActive=false}){
    const [ctitles1, setctitles1] = React.useState([])
    const [ctitles2, setctitles2] = React.useState([])
    const [ims, setIms] = React.useState("")

    React.useEffect(()=>{
        setctitles1(title1.split(" ").map((ctitle, index) => (<span className={`textshow show${index}`} key={`${index}`}>{ctitle}</span>)))
        setctitles2(title2.split(" ").map((ctitle, index) => (<span className={`textshow show${index}`} key={`${index}`}>{ctitle}</span>)))

        setIms(img)
    }, [])

    return (
        <div className={`carousItem ${isActive ? "carousItemActive" : null}`} id={"home"}>
            <div className="carous">
                <div className="carousImg">
                    <img src={ims} alt={title1} />
                </div>
                <div className="carousText">
                    <div className="container">
                        <div className="title2 white multi">{ctitles1}</div>
                        <div className="title2 white multi">{ctitles2}</div>
                        <div className="carousselAction">
                            <a href={link} className="btn btn-primary radius btn-caroussel">
                                <span>{btnText}</span>
                                <span className="icon"><ArrowForwardIosRoundedIcon /> </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caroussel
