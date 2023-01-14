import { useRouter } from "next/router"
import React from "react";
import styles from "./style.module.css"

export default class BaseSlider extends React.Component {
    constructor(props: any) {
        super(props)
        this.ref = React.createRef<HTMLDivElement>()
        this.slide = 0
        this.interval = setInterval(() => {
            this.slide += 1
            if (this.ref && this.ref.current && this.ref.current.clientWidth) {
                if (this.slide+1 > this.ref.current.childElementCount) {
                    this.slide = 0
                }
                this.ref.current.scrollLeft = Number(this.ref.current.clientWidth * this.slide)
            }
        }, 5000)
    }

    componentWillUnmount(): void {
        this.interval.clearInterval
    }

    interval: any
    slide: number
    ref: any

    render() {
        return (
            <>
            <div ref={this.ref} className={styles.base}>
                <section className={styles.banner}>
                    <img src="/baseslider/1.jpg" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="/baseslider/2.jpg" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="/baseslider/3.jpg" alt="" />
                </section>
            </div>
        </>
        )
    }
}