import React from "react"
import styles from "./style.module.css"
import Slider from "./slider"


export default class LifestyleEmapmles extends React.Component {
    render() {
        return (
            <>
                <h2>Образы</h2>
                <div className={styles.mainBox}>
                    <div className={styles.seg}>
                        <Slider/>
                        <Slider/>
                    </div>
                    <div className={styles.seg}>
                        <Slider/>
                        <Slider/>
                    </div>
                </div>
                
            </>
        )
    }
}