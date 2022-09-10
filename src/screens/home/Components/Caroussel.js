import React from "react"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import 'animate.css';
import caroussel1 from "./../../../asset/caroussel1.jpg"
import caroussel2 from "./../../../asset/caroussel2.jpg"
import caroussel3 from "./../../../asset/caroussel3.jpg"
import caroussel4 from "./../../../asset/caroussel4.jpg"

function Caroussel(){
    const delay = 9000;
    const [active, setActive] = React.useState(1)

    const sliderItems = [
        {
            title: "Roi du streaming",
            title2: "cameounais",
            img: caroussel3,
            link: "#",
            btnText: "Investir"
        },
        {
            title: "Devenir partenaire",
            title2: "Cinaf",
            img: caroussel4,
            link: "#",
            btnText: "Investir"
        }
    ]

    const timer = setInterval(()=>{
        active === sliderItems.length ? setActive(1) : setActive(active + 1)
        return clearInterval(timer)
    }, delay)



    return (
        <div className="caroussel">
            <div className="carousselBody">
                    {sliderItems.map((item, index) => (
                        <Carous key={`${index}`} isActive={index+1 === active && true} title1={item.title} title2={item.title2} img={item.img} link={item.link} btnText={item.btnText} />
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
        setctitles1(title1.split(" ").map((ctitle, index) => (<div className={`textshow show${index}`} key={`${index}`}>{ctitle}</div>)))
        setctitles2(title2.split(" ").map((ctitle, index) => (<div className={`textshow show${index}`} key={`${index}`}>{ctitle}</div>)))

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
                        <div className="cinaf white hm">CINAF</div>
                        <div className="title2 white multi flextTxt">{ctitles1}</div>
                        <div className="title2 white multi flextTxt">{ctitles2}</div>
                        <div className="carousselAction">
                            <a href={link} className="btn btn-primary radius btn-caroussel">
                                <span>{btnText}</span>
                                <span className="icon">
                                    <ArrowForwardIosRoundedIcon />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caroussel
