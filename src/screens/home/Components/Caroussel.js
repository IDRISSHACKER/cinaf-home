import React from "react"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import caroussel1 from "./../../../asset/caroussel1.jpg"
import caroussel2 from "./../../../asset/caroussel2.jpg"

function Caroussel(){
    const delay = 42000;
    const [active, setActive] = React.useState(1)

    const timer = setTimeout(()=>{
        clearTimeout(timer)
        active === 3 ? setActive(1) : setActive(active + 1)
    },delay)


    return (
        <div className="caroussel">
            <div className="carousselBody">
                <Carous isActive={active === 1 && true} title1={"Roi du streaming"} title2={"cameounais"} img={caroussel1} link="#" btnText={"A propos"} />
                <Carous isActive={active === 2 && true} title1={"Une équipe"} title2={"dynamique"} img={caroussel2} link="#" btnText={"Nos services"} />
                <Carous isActive={active === 3 && true} title1={"Devenir partenaire"} title2={"cinaf"} img={caroussel1} link="#" btnText={"Nos services"} />
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
