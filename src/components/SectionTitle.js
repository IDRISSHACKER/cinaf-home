import React,{Suspense} from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function SectionTitle({title, subtitle, icon = null, anim=true}) {
    const [showTitle, setShowTitle] = React.useState(true)

    setTimeout(() => {
        setShowTitle(true)
    }, 4000);
    return (
       <div>
        {anim 
                ? <Suspense fallback={<span>...</span>}>
                    <ScrollAnimation animateIn="animate__pulse" duration={1} delay={1}>
                        {showTitle && (
                            <motion.div exit={{ y: -1000 }} className="sectionTitle">
                                <div className="titleTxt">
                                    <div className="titileIcon">
                                        {icon}
                                    </div>
                                    <h3 className="title3">{title}</h3>
                                </div>
                                <div className="divider"></div>
                                <div className="subTitleTxt">
                                    <p>{subtitle}</p>
                                </div>
                            </motion.div>
                        )}
                    </ScrollAnimation>
                </Suspense>
                : <Suspense fallback={<span>...</span>}>
                        {showTitle && (
                            <motion.div exit={{ y: -1000 }} className="sectionTitle">
                                <div className="titleTxt">
                                    <div className="titileIcon">
                                        {icon}
                                    </div>
                                    <h3 className="title3">{title}</h3>
                                </div>
                                <div className="divider"></div>
                                <div className="subTitleTxt">
                                    <p>{subtitle}</p>
                                </div>
                            </motion.div>
                        )}
                </Suspense>}
       </div>
    )
}

export default SectionTitle

