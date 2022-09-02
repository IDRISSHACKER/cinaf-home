import React from "react"
import { motion, AnimatePresence } from "framer-motion"

function SectionTitle({title, subtitle, icon = null}) {
    const [showTitle, setShowTitle] = React.useState(true)

    setTimeout(() => {
        setShowTitle(true)
    }, 4000);
    return (
        <AnimatePresence>
            {showTitle && (
                <motion.div exit={{y: -1000}} className="sectionTitle">
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
        </AnimatePresence>
    )
}

export default SectionTitle

