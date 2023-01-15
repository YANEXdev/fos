import React from "react"
import styles from "./../style.module.css"
import Image from 'next/image'

export default class Slider extends React.Component {
    constructor(props: any) {
        super(props)
        this.ref = React.createRef<HTMLDivElement>()
        this.slide = 0
    }

    handler(slide: number) {
        if (this.ref && this.ref.current && this.ref.current.clientWidth) {
            this.slide = slide
            this.ref.current.scrollLeft = Number(this.ref.current.clientWidth * this.slide)
        }
    }

    slide: number
    ref: any

    render() {
        return (
            <>
                <div className={styles.container}>
                        <div className={styles.controls}>
                            <div onClick={()=>{
                                this.handler(0)
                            }} className={styles.control}/>
                            <div onClick={()=>{
                                this.handler(1)
                            }} className={styles.control}/>
                            <div onClick={()=>{
                                this.handler(2)
                            }} className={styles.control}/>
                        </div>
                        <div ref={this.ref} className={styles.main}>
                            <section className={styles.example}>
                                <Image loading="eager" src="/lifestyle/1.png" alt="Picture of the author" width={800} height={800} />
                            </section>
                            <section className={styles.example}>
                                <Image loading="eager" src="/lifestyle/2.png" alt="Picture of the author" width={800} height={800} />
                            </section>
                            <section className={styles.example}>
                                <Image loading="eager" src="/lifestyle/3.png" alt="Picture of the author" width={800} height={800} />
                            </section>
                        </div>
                    </div>
                
            </>
        )
    }
}