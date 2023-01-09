import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { clearInterval } from "timers"
import styles from "./style.module.css"

export default function LifestyleEmapmles() {
    const [slide, setSlide] = useState(0)

    const sliderRef = useRef<HTMLDivElement>(null)

    const goToSlide = () => {
        if (sliderRef && sliderRef.current && sliderRef.current.clientHeight) {
            sliderRef.current.scrollLeft = slide * sliderRef.current.clientWidth   
        }
    }

    const handler = (to: number) => {
        setSlide(to)
    }

    setTimeout(() => {
        if (sliderRef && sliderRef.current && sliderRef.current.clientHeight) {
            if (sliderRef.current.childElementCount - 1 <= slide) {
                setSlide(0)
            } else {
                setSlide(slide + 1)
            }
        }
    }, 10000)

    useEffect(() => {
        goToSlide()
    }, [slide])
    
    return (
        <>
            <h2>Образы</h2>
            <div className={styles.container}>
                <div className={styles.controls}>
                    <div onClick={()=>{
                        handler(0)
                    }} className={styles.control}/>
                    <div onClick={()=>{
                        handler(1)
                    }} className={styles.control}/>
                    <div onClick={()=>{
                        handler(2)
                    }} className={styles.control}/>
                </div>
                <div ref={sliderRef} className={styles.main}>
                    <section className={styles.example}>
                        <img src="https://krasotka.cc/wp-content/uploads/2022/05/jelenasimeonova_277251021_496638492152813_7071621032452692924_n.jpg" alt="" />
                    </section>
                    <section className={styles.example}>
                        <img src="https://s.mediasole.ru/cache/content/data/images/2846/2846727/original.jpg" alt="" />
                    </section>
                    <section className={styles.example}>
                        <img src="https://ledixbeauty.com.ua/wp-content/uploads/2019/09/modnye-povsednevnye-luki-2.jpg" alt="" />
                    </section>
                </div>
            </div>
        </>
    )
}